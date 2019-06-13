class StoryForm
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :id, :character_name, :user_name, :sections, :body

  validates :character_name, presence: true

  def initialize(params)
    @character_name = params[:character_name]
    @user_name = params[:user_name]
    @sections = params[:sections]
  end

  def save
    ActiveRecord::Base.transaction do
      return false if invalid?

      story = Story.new(character_name: @character_name, user_name: @user_name)
      story.save!

      @sections.each do |section|
        text = Text.new(body: section[:text][:body])
        text.save!

        child = Section.new(layout_type: section[:layout_type], story: story, text: text)
        child.save!
      end

      self.id = story.id
    rescue => e
      puts e.inspect
      return false
    end

    true
  end
end
