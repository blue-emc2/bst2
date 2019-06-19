class StorySerializer
  include FastJsonapi::ObjectSerializer
  has_many :sections

  # フロント側はCamelCaseで処理したい
  attribute :characterName, &:character_name
  attribute :userName, &:user_name

  attribute :sections do |object|
    object.sections.map do |section|
      {
        id: section.id,
        textPosition: section.layout_type,  # TDOD: カラム名を変更する
        body: section.text.body,
      }
    end
  end
end
