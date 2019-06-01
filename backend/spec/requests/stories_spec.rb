require 'rails_helper'

RSpec.describe 'Stories', type: :request do
  describe 'GET /stories' do
    it 'works! (now write some real specs)' do
      get api_v1_stories_path
      expect(response).to have_http_status(200)
    end
  end

  describe 'GET #show' do
    before do
      create(:story)
      get api_v1_story_path(1)
    end

    context 'idがあるとき' do

      it '200を返す' do
        expect(response).to have_http_status(200)
      end

      # it 'キャラクター名を返す' do
      # end
    end
  end
end
