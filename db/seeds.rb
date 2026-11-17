#地域別初期データ
Region.find_or_create_by!(code: "hokkaido") do |region|
  region.name = "北海道"
end

Region.find_or_create_by!(code: "tohoku") do |region|
  region.name = "東北"
end

Region.find_or_create_by!(code: "kanto") do |region|
  region.name = "関東"
end

Region.find_or_create_by!(code: "chubu") do |region|
  region.name = "中部"
end

Region.find_or_create_by!(code: "kansai") do |region|
  region.name = "近畿"
end

Region.find_or_create_by!(code: "chugoku") do |region|
  region.name = "中国"
end

Region.find_or_create_by!(code: "shikoku") do |region|
  region.name = "四国"
end

Region.find_or_create_by!(code: "kyushu") do |region|
  region.name = "九州"
end

#都道府県初期データ
prefectures = [
  ["01", "北海道", "hokkaido"],
  ["02", "青森県", "tohoku"],
  ["03", "岩手県", "tohoku"],
  ["04", "宮城県", "tohoku"],
  ["05", "秋田県", "tohoku"],
  ["06", "山形県", "tohoku"],
  ["07", "福島県", "tohoku"],
  ["08", "茨城県", "kanto"],
  ["09", "栃木県", "kanto"],
  ["10", "群馬県", "kanto"],
  ["11", "埼玉県", "kanto"],
  ["12", "千葉県", "kanto"],
  ["13", "東京都", "kanto"],
  ["14", "神奈川県", "kanto"],
  ["15", "新潟県", "chubu"],
  ["16", "富山県", "chubu"],
  ["17", "石川県", "chubu"],
  ["18", "福井県", "chubu"],
  ["19", "山梨県", "chubu"],
  ["20", "長野県", "chubu"],
  ["21", "岐阜県", "chubu"],
  ["22", "静岡県", "chubu"],
  ["23", "愛知県", "chubu"],
  ["24", "三重県", "kansai"],
  ["25", "滋賀県", "kansai"],
  ["26", "京都府", "kansai"],
  ["27", "大阪府", "kansai"],
  ["28", "兵庫県", "kansai"],
  ["29", "奈良県", "kansai"],
  ["30", "和歌山県", "kansai"],
  ["31", "鳥取県", "chugoku"],
  ["32", "島根県", "chugoku"],
  ["33", "岡山県", "chugoku"],
  ["34", "広島県", "chugoku"],
  ["35", "山口県", "chugoku"],
  ["36", "徳島県", "shikoku"],
  ["37", "香川県", "shikoku"],
  ["38", "愛媛県", "shikoku"],
  ["39", "高知県", "shikoku"],
  ["40", "福岡県", "kyushu"],
  ["41", "佐賀県", "kyushu"],
  ["42", "長崎県", "kyushu"],
  ["43", "熊本県", "kyushu"],
  ["44", "大分県", "kyushu"],
  ["45", "宮崎県", "kyushu"],
  ["46", "鹿児島県", "kyushu"],
  ["47", "沖縄県", "kyushu"],
]

prefectures.each do |code, name, region_code|
  Prefecture.find_or_create_by!(code: code) do |prefecture|
    prefecture.name = name
    prefecture.region = Region.find_by!(code: region_code)
  end
end


