require "rails_helper"

RSpec.describe "Stories", type: :request do
  let(:json) { JSON.parse(response.body) }

  describe "GET /stories" do
    let(:character_name1) { "Yoshi'p Sampo" }
    let(:user_name1) { "Yoshi" }
    let(:character_name2) { "アムロ・レイ" }
    let(:user_name2) { "やたて はじめ" }

    let(:text_body_1) { "僕は数えていないですが、ヨーロッパだけで" }
    let(:text_body_2) { "希望の園 エデン零式" }
    let(:text_body_3) { "こ、こいつ、動くぞ" }
    let(:text_body_4) { "好きでこうなったのではない。" }

    before do
      sections = []
      4.times do |i|
        t = create(:text, body: send("text_body_#{i + 1}"))
        sections << create(:section, layout_type: "Text", text: t)
      end

      create(:story, character_name: character_name1, user_name: user_name1, sections: sections[0..1])
      create(:story, character_name: character_name2, user_name: user_name2, sections: sections[2..3])
      get api_v1_stories_path
    end

    it "200を返す" do
      expect(response).to have_http_status(200)
    end

    context "YoshiPのとき" do
      it "キャラクター名がある" do
        expect(json["data"][0]["attributes"]["characterName"]).to eq "Yoshi'p Sampo"
      end

      it "作者がある" do
        expect(json["data"][0]["attributes"]["userName"]).to eq "Yoshi"
      end

      it "先頭のbodyだけとれている" do
        expect(json["data"][0]["attributes"]["body"]).to eq "僕は数えていないですが、ヨーロッパだけで"
      end
    end

    context "アムロ・レイのとき" do
      it "キャラクター名がある" do
        expect(json["data"][1]["attributes"]["characterName"]).to eq "アムロ・レイ"
      end

      it "作者がある" do
        expect(json["data"][1]["attributes"]["userName"]).to eq "やたて はじめ"
      end

      it "先頭のbodyだけとれている" do
        expect(json["data"][1]["attributes"]["body"]).to eq "こ、こいつ、動くぞ"
      end
    end
  end

  describe "GET #show" do
    context "idがあるとき" do
      before do
        t1 = create(:text, body: "吾輩（わがはい）は猫である。名前はまだ無い。")
        t2 = create(:text, body: "どこで生れたかとんと見当（けんとう）がつかぬ。")
        t3 = create(:text, body: "何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。")

        sections = [
          create(:section, layout_type: "Text", text: t1),
          create(:section, layout_type: "Text", text: t2),
          create(:section, layout_type: "Text", text: t3),
        ]
        story = create(:story, character_name: "Yoshi'p Sampo", user_name: "Yoshi", sections: sections)

        get api_v1_story_path(story.id)
      end

      it "200を返す" do
        expect(response).to have_http_status(200)
      end

      it "キャラクター名を返す" do
        expect(json["data"]["attributes"]["characterName"]).to eq "Yoshi'p Sampo"
      end

      it "ユーザー名を返す" do
        expect(json["data"]["attributes"]["userName"]).to eq "Yoshi"
      end

      it "レイアウトタイプを返す" do
        expect(json["data"]["attributes"]["sections"][0]["layoutType"]).to eq "Text"
      end

      it "テキストを返す" do
        expect(json["data"]["attributes"]["sections"][0]["body"]).to eq "吾輩（わがはい）は猫である。名前はまだ無い。"
        expect(json["data"]["attributes"]["sections"][1]["body"]).to eq "どこで生れたかとんと見当（けんとう）がつかぬ。"
        expect(json["data"]["attributes"]["sections"][2]["body"]).to eq "何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。"
      end
    end

    context "idがないとき" do
      before do
        get api_v1_story_path(999)
      end

      it "404を返す" do
        expect(response).to have_http_status(404)
      end
    end
  end
end
