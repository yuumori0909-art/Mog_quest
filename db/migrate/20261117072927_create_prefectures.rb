class CreatePrefectures < ActiveRecord::Migration[8.0]
  def change
    create_table :prefectures do |t|
      t.references :region, null: false, foreign_key: true
      t.string :name, null: false
      t.string :code, null: false

      t.timestamps
    end
    add_index :prefectures, :name, unique: true
    add_index :prefectures, :code, unique: true
  end
end
