require "rails_helper"

RSpec.describe "Stories", type: :request do
  let(:json) { JSON.parse(response.body) }
  let(:text1) { create(:text, body: text_body_1) }
  let(:text2) { create(:text, body: text_body_2) }
  let(:section1) { create(:section, layout_type: "Text", text: text1) }
  let(:section2) { create(:section, layout_type: "Text", text: text2) }
  let(:sections) { [section1, section2] }

  describe "GET /stories" do
    let(:character_name) { "Yoshi'p Sampo" }
    let(:user_name) { "Yoshi" }
    let(:text_body_1) { "僕は数えていないですが、ヨーロッパだけで" }
    let(:text_body_2) { "希望の園 エデン零式" }

    before do
      create(:story, character_name: character_name, user_name: user_name, sections: sections)
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
      let(:character_name) { "アムロ・レイ" }
      let(:user_name) { "やたて はじめ" }
      let(:text_body_1) { "こ、こいつ、動くぞ" }
      let(:text_body_2) { "好きでこうなったのではない。" }

      it "キャラクター名がある" do
        puts "json=#{json}"
        expect(json["data"][1]["attributes"]["characterName"]).to eq "アムロ・レイ"
      end

      it "作者がある" do
        expect(json["data"][1]["attributes"]["userName"]).to eq "Yoshi"
      end

      it "先頭のbodyだけとれている" do
        puts "json=#{json}"
        expect(json["data"][1]["attributes"]["body"]).to eq "こ、こいつ、動くぞ"
      end
    end
  end

  describe "GET #show" do
    context "idがあるとき" do
      before do
        sections = create_list(:section, 3)
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
        expect(json["data"]["attributes"]["sections"][0]["body"]).to eq "親譲りの無鉄砲で小供の時から損ばかりして居る。"
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
