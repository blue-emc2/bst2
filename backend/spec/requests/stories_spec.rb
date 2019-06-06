require 'rails_helper'

RSpec.describe 'Stories', type: :request do
  let(:json) { JSON.parse(response.body) }

  describe 'GET /stories' do
    before do
      sections = create_list(:section, 3)
      create(:story, character_name: "Yoshi'p Sampo", user_name: 'Yoshi', sections: sections)

      get api_v1_stories_path
    end

    it '200を返す' do
      expect(response).to have_http_status(200)
    end

    it 'キャラクター名がある' do
      expect(json['data']['attributes']['characterName']).to eq "Yoshi'p Sampo"
    end
  end

  describe 'GET #show' do
    context 'idがあるとき' do
      before do
        sections = create_list(:section, 3)
        story = create(:story, character_name: "Yoshi'p Sampo", user_name: 'Yoshi', sections: sections)

        get api_v1_story_path(story.id)
      end

      it '200を返す' do
        expect(response).to have_http_status(200)
      end

      it 'キャラクター名を返す' do
        expect(json['data']['attributes']['characterName']).to eq "Yoshi'p Sampo"
      end

      it 'ユーザー名を返す' do
        expect(json['data']['attributes']['userName']).to eq 'Yoshi'
      end

      it 'レイアウトタイプを返す' do
        expect(json['data']['attributes']['sections'][0]['layoutType']).to eq 'Text'
      end

      it 'テキストを返す' do
        expect(json['data']['attributes']['sections'][0]['body']).to eq '親譲りの無鉄砲で小供の時から損ばかりして居る。'
      end
    end

    context 'idがないとき' do
      before do
        get api_v1_story_path(999)
      end

      it '404を返す' do
        expect(response).to have_http_status(404)
      end
    end
  end
end
