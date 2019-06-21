class Section < ApplicationRecord
  belongs_to :text
  belongs_to :story
  belongs_to :image, optional: true
end
