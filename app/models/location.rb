class Location < ActiveRecord::Base
  has_attached_file :empty_still_image, :styles => { :medium => "300x300>", :thumb => "100x100>" }, :default_url => "/images/:style/missing.png"
  validates_attachment_content_type :empty_still_image, :content_type => /\Aimage\/.*\Z/

  belongs_to :user
end
