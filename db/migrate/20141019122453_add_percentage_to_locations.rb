class AddPercentageToLocations < ActiveRecord::Migration
  def change
    add_column :locations, :percent, :integer
  end
end
