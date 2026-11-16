class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy
  has_one_attached :profile_image

  <% #新規登録用バリデーション　%>
  validates :email_address, presence: true
  validates :name, presence: true, uniqueness: true, length: { minimum: 2, maximum: 20 }
  validates :password, length: { minimum: 6 }, allow_nil: true 

  normalizes :email_address, with: ->(e) { e.strip.downcase }
end
