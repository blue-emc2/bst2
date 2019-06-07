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
