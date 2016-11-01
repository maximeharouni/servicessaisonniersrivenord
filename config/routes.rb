Rails.application.routes.draw do
  # Catch all routes except for /api/*
  match '*path', constraints: { path: /(?!.*?api).*/ }, to: 'application#index', via: [:get, :post]

  scope :api do
    scope :auth do
      match '/', to: 'authentication#authenticate', via: [:post]
      match 'register', to: 'authentication#register', via: [:post]
    end
    resources :posts, only: [:index, :create, :show, :update, :destroy]
    resources :users, only: [:index, :create, :show, :update, :destroy]
  end
end
