class AddUserNameToStory < ActiveRecord::Migration[5.2]
  def change
    add_column :stories, :user_name, :string, default: ''
  end
end
