require 'sinatra'
require 'sinatra/base'
require 'sinatra/reloader'

class WebSite < Sinatra::Base

  get '/' do
    erb:'page/home'
  end

  get '/documentations' do
    erb:'page/journal'
  end

  get '/blog' do
    erb:'page/blog'
  end
 
  run! if app_file == $0
end
