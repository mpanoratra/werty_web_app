class AddAttachmentEmptyStillImageToLocations < ActiveRecord::Migration
  def self.up
    change_table :locations do |t|
      t.attachment :empty_still_image
    end
  end

  def self.down
    remove_attachment :locations, :empty_still_image
  end
end
