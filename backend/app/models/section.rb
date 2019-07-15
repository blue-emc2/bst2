class Section < ApplicationRecord
  belongs_to :story
  belongs_to :text, dependent: :destroy
  belongs_to :image, optional: true, dependent: :destroy
end
