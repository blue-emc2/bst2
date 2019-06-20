class Image < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :body

  def body_url
    body.attached? ? url_for(body) : nil
  end
end
