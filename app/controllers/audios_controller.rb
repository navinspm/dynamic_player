class AudiosController < ApplicationController
	def index
		@audios=Audio.all
	end
	def new
		@audio = Audio.new
	end
	def create
		@album = Album.find(params[:album_id])
		@audio=@album.audios.create(audio_params)
		redirect_to album_path(@album)
	end


	private
		def audio_params
			params.require(:audio).permit(:name,:audio)
		end
end
