class AddNameToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :name, :string, default: ""
    add_column :users, :lastName, :string, default: ""
    remove_column :users, :encrypted_password
  end
end
