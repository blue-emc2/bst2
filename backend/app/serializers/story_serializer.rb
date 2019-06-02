class StorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :character_name, :user_name

  attribute :sections do |object|
    []
  end
end
