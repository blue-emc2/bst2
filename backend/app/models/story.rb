class Story < ApplicationRecord
  has_many :sections, dependent: :destroy
end
