class Video < ActiveRecord::Base
	  mount_uploader :video, VideosUploader
	   def set_success(format, opts)
    self.success = true
  end
end
