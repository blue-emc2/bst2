class Section < ApplicationRecord
  belongs_to :text
  belongs_to :story
end
