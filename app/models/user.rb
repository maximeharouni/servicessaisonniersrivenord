class User < ActiveRecord::Base
#  attr_accessible :email, :password, :password_confirmation, :name, :lastName

  attr_accessor :password
  before_save :encrypt_password

  validates_confirmation_of :password
  validates_presence_of :password, :on => :register
  validates_presence_of :email
  validates_uniqueness_of :email

  def encrypt_password
    if password.present?
      self.password_salt = BCrypt::Engine.generate_salt
      self.password_hash = BCrypt::Engine.hash_secret(password, password_salt)
    end
  end
end
