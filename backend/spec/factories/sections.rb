FactoryBot.define do
  factory :section, class: Section do
    layout_type { "Text" }

    story

    with_text

    trait :with_text do
      after(:create) do |section|
        create(:text, section: section)
      end
    end
  end
end
