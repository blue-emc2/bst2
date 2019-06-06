class StoriesSerializer
  include FastJsonapi::ObjectSerializer

  # フロント側はCamelCaseで処理したい
  attribute :characterName, &:character_name
  attribute :userName, &:user_name

  attribute :body do |object|
    object.sections.detect { |section| section.text.present? }
  end
end
