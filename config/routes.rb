Rails.application.routes.draw do

  get 'home/about' => 'home#about', as: :about

  get 'home/contact' => 'home#contact', as: :contact

  root 'home#index', as: :home






end
