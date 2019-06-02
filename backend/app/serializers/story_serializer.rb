class StorySerializer
  include FastJsonapi::ObjectSerializer
  attributes :character_name, :user_name
  has_many :sections
end
