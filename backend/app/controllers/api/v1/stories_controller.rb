module Api
  module V1
    class StoriesController < ApplicationController
      rescue_from ActiveRecord::RecordNotFound do |exception|
        head :not_found
      end

      before_action :set_story, only: %i[show update destroy]

      # GET /stories
      def index
        @stories = Story.all

        render json: StoriesSerializer.new(@stories, is_collection: true).serialized_json
      end

      # GET /stories/1
      def show
        render json: StorySerializer.new(@story).serialized_json
      end

      # POST /stories
      def create
        @story_form = StoryForm.new(story_params)
        if @story_form.save
          render json: @story_form.id, status: :created, location: api_v1_story_url(@story_form.id)
        else
          render json: @story.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /stories/1
      def update
        if @story.update(story_params)
          render json: @story
        else
          render json: @story.errors, status: :unprocessable_entity
        end
      end

      # DELETE /stories/1
      def destroy
        @story.destroy
      end

      private

      # Use callbacks to share common setup or constraints between actions.
      def set_story
        @story = Story.find(params[:id])
      end

      # Only allow a trusted parameter "white list" through.
      def story_params
        params.require(:story).permit({ sections: [:layoutType, { text: [:body], image: [:body] }] }, :characterName, :userName)
      end
    end
  end
end
