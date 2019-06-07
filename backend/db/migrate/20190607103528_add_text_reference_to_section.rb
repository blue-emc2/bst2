class AddTextReferenceToSection < ActiveRecord::Migration[5.2]
  def change
    add_reference(:sections, :text, index: true)
  end
end
