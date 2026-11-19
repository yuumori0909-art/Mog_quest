class Post < ApplicationRecord
  belongs_to :user
  belongs_to :prefecture
  has_many_attached :photos

  #空チェック
  validates :name, presence: true
  validates :access, presence: true

  #6項目いずれかを選択
  validates :genre, presence: true, inclusion: { in: ["和食", "洋食", "中華", "スイーツ", "ドリンク", "お土産"]}

  #説明文500文字以内
  validates :description, presence: true, length: {maximum: 500}

  #true/false　選択
  validates :shipping_available, inclusion: { in: [true, false]}

  #レビュー　整数1～5制限
  validates :taste_rating, :price_rating, :repeat_rating, :overall_rating, numericality: {only_integer: true, in: 1..5 }

  #写真枚数制限
  validate :photos_limit

  private

  #写真枚数を確認（10枚以内）
  def photos_limit
    return unless photos.length > 10

    errors.add(:photos,"は最大10枚まで投稿できます")
  end  
end
