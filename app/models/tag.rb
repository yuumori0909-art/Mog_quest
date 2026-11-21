class Tag < ApplicationRecord

  has_many :post_tags, dependent: :destroy
  has_many :posts, through: :post_tags
  
  #空チェック・20文字以内
  validates :name, presence: true, uniqueness: true, length: {maximum: 20 }
end
