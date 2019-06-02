class StorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :character_name, :user_name
  has_many :sections

  attribute :sections do |object|
    object.sections.map do |section|
      {
        id: section.id,
        layout_type: section.layout_type,
        body: section.text.body
      }
    end
  end
end
