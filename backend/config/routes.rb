Rails.application.routes.draw do
  resources :likes
  resources :comments
  resources :posts
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
 resources :sessions, only: [:create]
 resources :users, only: [:create]
 get 'logged_in', to: 'sessions#logged_in'
 delete 'logout', to: 'sessions#logout'
end
