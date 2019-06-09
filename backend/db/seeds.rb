# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

t1 = Text.create(body: "吾輩（わがはい）は猫である。名前はまだ無い。")
t2 = Text.create(body: "どこで生れたかとんと見当（けんとう）がつかぬ。")
t3 = Text.create(body: "何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。")

sections = [
  Section.create(layout_type: "Text", text: t1),
  Section.create(layout_type: "Text", text: t2),
  Section.create(layout_type: "Text", text: t3),
]

Story.create(character_name: "Yoshi'p Sampo", user_name: "Yoshi", sections: sections)

attr = {
  character_name: "マリオ",
  user_name: "宮本茂",
  bodies: [
    "帽子とオーバーオールを着用し、鼻の下に髭を生やしている。こうしたデザインは、16x16のドットでキャラクターを表現するという
    『ドンキーコング』当時の制約の中で視認性を重視した結果生まれたものである。
    宮本茂による初期作品のデザインではシャツが青色でオーバーオールが赤色となっていたが、小田部羊一が後にデザインした『スーパーマリオブラザーズ3』以降
    （日本国外では『Super Mario Bros. 2』（日本国内における『スーパーマリオUSA』）以降）は初期とは逆にシャツが赤色でオーバーオールが青色の配色となり、
    現行のデザインでも後者の配色が主に用いられている。また、作品の内容や場面によっては普段のそれとは違う服装を身につけていることもある。",
    "初登場した当時は正式な名前が決まっておらず、「ジャンプマン」「救助マン」「ミスター・ビデオゲーム」といった通称で呼ばれていた",
    "双子の弟「ルイージ」がいる。",
  ],
}

sections = []
attr[:bodies].each do |b|
  t = Text.create(body: b)
  sections << Section.create(layout_type: "Text", text: t)
end
Story.create(character_name: attr[:character_name], user_name: attr[:user_name], sections: sections)
