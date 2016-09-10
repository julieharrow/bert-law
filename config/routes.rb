Rails.application.routes.draw do

  get 'home/about' => 'home#about', as: :about

  get 'home/contact' => 'home#contact', as: :contact

  root 'home#index', as: :home

  get 'contact', to: 'messages#new', as: 'contacting'

  post 'contact', to: 'messages#create'





end
