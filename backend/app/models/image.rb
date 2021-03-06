class Image < ApplicationRecord
  include Rails.application.routes.url_helpers
  has_one_attached :body, dependent: :purge

  # Imageモデルっていらないモデルかも？？
  def attached?
    body&.attached?
  end

  def body_url
    body.attached? ? url_for(body) : nil
  end
end
