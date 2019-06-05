class AddCharacterNameToStory < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :character_name, :string, null: false, default: ''
  end
end
