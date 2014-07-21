class Album < ActiveRecord::Base
	mount_uploader :cover, CoverUploader
	has_many :audios
end
