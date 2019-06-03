class CreateCars < ActiveRecord::Migration[5.2]
  def change
    create_table :cars do |t|
      t.string :model
      t.string :size
      t.string :photo
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
