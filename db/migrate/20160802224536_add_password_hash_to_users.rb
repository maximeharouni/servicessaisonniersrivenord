class AddPasswordHashToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :password_hash, :string, default: "", null: false
    add_column :users, :password_salt, :string, default: "", null: false
  end
end
