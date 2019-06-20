class AddImageReferenceToSection < ActiveRecord::Migration[5.2]
  def change
    add_reference(:sections, :image, index: true)
  end
end
