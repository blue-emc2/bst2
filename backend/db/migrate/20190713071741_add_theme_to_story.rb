class AddThemeToStory < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :theme, :json, null: false, default: {}
  end
end
