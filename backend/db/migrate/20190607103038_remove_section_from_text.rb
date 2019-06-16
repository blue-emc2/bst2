class RemoveSectionFromText < ActiveRecord::Migration[5.2]
  def up
    remove_reference :texts, :section, index: true
  end

  def down
  end
end
