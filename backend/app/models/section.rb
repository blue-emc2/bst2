class Section < ApplicationRecord
  belongs_to :story
  has_one :text
end
