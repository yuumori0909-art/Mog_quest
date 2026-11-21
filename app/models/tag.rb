class Tag < ApplicationRecord
  
  #空チェック・20文字以内
  validates :name, presence: true, uniqueness: true, length: {maximum: 20 }
end
