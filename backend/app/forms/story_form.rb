class StoryForm
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :id, :character_name, :user_name, :sections

  validates :character_name, presence: true

  def initialize(params)
    @character_name = params[:character_name]
    @user_name = params[:user_name]
    @sections = params[:sections]
  end

  def save
    return false if invalid?

    story = Story.new(character_name: @character_name, user_name: @user_name)
    story.save

    self.id = story.id

    true
  end
end
