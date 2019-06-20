class StoryForm
  include ActiveModel::Model
  include ActiveModel::Validations

  attr_accessor :id, :character_name, :user_name, :sections, :body

  validates :character_name, presence: true

  def initialize(params)
    p = params.transform_keys { |k| k.underscore }
    @character_name = p[:character_name]
    @user_name = p[:user_name]
    @sections = sections_underscoreize(p[:sections])
  end

  def save
    ActiveRecord::Base.transaction do
      return false if invalid?

      story = Story.new(character_name: @character_name, user_name: @user_name)
      story.save!

      @sections.each do |section|
        image_exist = section.has_key?(:image)
        if image_exist
          image = Image.new(body: section[:image][:body])
          image.save!
        end

        text = Text.new(body: section[:text][:body])
        text.save!

        child = Section.new(layout_type: section[:layout_type], story: story, text: text)
        child.image = image if image_exist
        child.save!
      end

      self.id = story.id
    rescue => e
      puts e.inspect
      return false
    end

    true
  end

  private

  def sections_underscoreize(sections)
    sections.map { |section| section.transform_keys { |k| k.underscore } }
  end
end
