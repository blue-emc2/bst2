require 'rails_helper'

RSpec.describe 'Stories', type: :request do
  describe 'GET /stories' do
    it 'works! (now write some real specs)' do
      get api_v1_stories_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET #show' do
    let(:json) { JSON.parse(response.body) }

    before do
      sections = create_list(:section, 3)
      story = create(:story, character_name: "Yoshi'p Sampo", user_name: 'Yoshi', sections: sections)

      get api_v1_story_path(story.id)
    end

    context 'idがあるとき' do
      it '200を返す' do
        expect(response).to have_http_status(200)
      end

      it 'キャラクター名を返す' do
        expect(json['data']['attributes']['character_name']).to eq "Yoshi'p Sampo"
      end

      it 'ユーザー名を返す' do
        expect(json['data']['attributes']['user_name']).to eq 'Yoshi'
      end

      it 'テキストを返す' do
        expect(json['data']['relationships']['sections']['data'].size).to eq 3
      end
    end
  end
end
