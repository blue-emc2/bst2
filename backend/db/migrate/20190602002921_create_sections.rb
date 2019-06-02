class CreateSections < ActiveRecord::Migration[5.2]
  def change
    create_table :sections do |t|
      t.string :layout_type, null: false, default: ''
      t.belongs_to :story, index: true

      t.timestamps
    end
  end
end
