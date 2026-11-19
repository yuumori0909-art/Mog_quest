class CreatePosts < ActiveRecord::Migration[8.0]
  def change
    create_table :posts do |t|
      t.string :name, null: false
      t.string :genre, null: false
      t.string :access, null: false
      t.text :description, null: false
      t.boolean :shipping_available, null: false
      t.integer :taste_rating, null: false
      t.integer :price_rating, null: false
      t.integer :repeat_rating, null: false
      t.integer :overall_rating, null: false
      t.references :user, null: false, foreign_key: true
      t.references :prefecture, null: false, foreign_key: true

      t.timestamps
    end
  end
end
