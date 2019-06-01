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
      story = create(:story, character_name: "Yoshi'p Sampo")
      get api_v1_story_path(story.id)
    end

    context 'idがあるとき' do
      it '200を返す' do
        expect(response).to have_http_status(200)
      end

      it 'キャラクター名を返す' do
        expect(json['data']['attributes']['character_name']).to eq "Yoshi'p Sampo"
      end
    end
  end
end
