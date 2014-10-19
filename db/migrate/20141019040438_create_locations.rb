class CreateLocations < ActiveRecord::Migration
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :number_rows
      t.integer :number_cols
      t.text :queue_list
      t.float :time_to_clear_queue

      t.timestamps
    end
  end
end
