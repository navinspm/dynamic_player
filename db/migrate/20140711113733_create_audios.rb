class CreateAudios < ActiveRecord::Migration
  def change
    create_table :audios do |t|
      t.string :name
      t.string :audio
      t.references :album 
      t.timestamps
    end
  end
end
