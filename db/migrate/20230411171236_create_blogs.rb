class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :title
      t.text :description
      t.belongs_to :user, null: true, foreign_key: true

      t.timestamps
    end
  end
end
