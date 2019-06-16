class CreateTexts < ActiveRecord::Migration[5.2]
  def change
    create_table :texts do |t|
      t.string :body, null: false
      t.references :section, index: true

      t.timestamps
    end
  end
end
