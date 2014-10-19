class AddAccountTypeToUsers < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :last_name, :string
    add_column :users, :account_type, :integer, default: 1

  end
end
