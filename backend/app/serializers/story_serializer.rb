class StorySerializer
  include FastJsonapi::ObjectSerializer
  has_many :sections

  # フロント側はCamelCaseで処理したい
  attribute :characterName, &:character_name
  attribute :userName, &:user_name

  attribute :sections do |object|
    object.sections.map do |section|
      result = {
        id: section.id,
        textPosition: section.layout_type,  # TDOD: カラム名を変更する
        body: section.text.body,
      }

      if (section.image)
        logger.debug("url=#{section.image.body_url},    image=#{section.image}")
        result[:imageUrl] = section.image.body_url
      end
      result
    end
  end
end
