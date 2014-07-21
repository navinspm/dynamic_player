class Audio < ActiveRecord::Base
	mount_uploader :audio, AudioUploader
	belongs_to :album
end
