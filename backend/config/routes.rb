Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "tasks" => "tasks#index"
  post "tasks" => "tasks#create"
  delete "tasks/:id" => "tasks#destroy"
  put "tasks/:id" => "tasks#update"
end
