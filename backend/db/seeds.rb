# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

sections = Section.create([{ layout_type: 'Text' }, { layout_type: 'Text' }, { layout_type: 'Text' }])

sections.each do |s|
  Text.create(section: s, body: '小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。')
end

Story.create(character_name: "Yoshi'p Sampo", user_name: 'Yoshi', sections: sections)
