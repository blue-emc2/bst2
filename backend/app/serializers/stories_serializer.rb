require "active_support"
require "active_support/core_ext/string/filters"

class StoriesSerializer
  include FastJsonapi::ObjectSerializer

  # フロント側はCamelCaseで処理したい
  attribute :characterName, &:character_name
  attribute :userName, &:user_name

  attribute :body do |object|
    section = object.sections.detect { |section| section.text.present? }
    description = section.text.body.truncate(50)

    {
      description: description,
      imageUrl: section.image&.body_url,
    }
  end
end
