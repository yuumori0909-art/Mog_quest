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
  validates :taste_rating, :price_rating, :repeat_rating, :overall_rating, numericality: {only_integer: true, in: 1..5 }, presence: true

  #写真枚数制限
  validate :photos_limit

  #写真空チェック
  validate :photos_presence

  private

  #写真枚数を確認（10枚以内）
  def photos_limit
    return unless photos.length > 10

    errors.add(:photos,"は最大10枚まで投稿できます")
  end  

  #写真投稿チェック（1枚以上）
  def photos_presence
    return if photos.attached?

    errors.add(:photos,"を1枚以上送付してください")
  end 
end
