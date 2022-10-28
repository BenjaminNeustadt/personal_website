require 'sinatra'

get '/' do
  erb:'page/home'
end

get '/documentations' do
  erb:'page/journal'
end