class Post < ActiveRecord::Base
  enum status: [ :active, :archived]
  validates_presence_of :content
  validates_presence_of :title
end
