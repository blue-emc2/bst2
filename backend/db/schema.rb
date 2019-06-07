# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_07_103528) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "sections", force: :cascade do |t|
    t.string "layout_type", default: "", null: false
    t.bigint "story_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "text_id"
    t.index ["story_id"], name: "index_sections_on_story_id"
    t.index ["text_id"], name: "index_sections_on_text_id"
  end

  create_table "stories", force: :cascade do |t|
    t.string "title"
    t.boolean "published"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "character_name", default: "", null: false
    t.string "user_name", default: ""
  end

  create_table "texts", force: :cascade do |t|
    t.string "body", default: "", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
