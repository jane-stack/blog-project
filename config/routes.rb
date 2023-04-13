Rails.application.routes.draw do

  resources :blogs do
    resources :comments, only: [:index, :show]
  end

  resources :comments, only: [:create]

  # User
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'

  # Sessions
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'

  # Comments
  # post '/new', to: 'comments#create'
  
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  # Defines the root path route ("/")
  # root "articles#index"
end
