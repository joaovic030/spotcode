class Api::V1::SearchController < ApplicationController
    def index
        @songs = Song.where('title like ?', "%#{params[:query]}%")
        @albums = Album.where('title like ?', "%#{params[:query]}%")
        @artists = Artist.where('name like ?', "%#{params[:query]}%")
    end
end
