class TasksController < ApplicationController
  before_action :set_task, only: [:update, :destroy]

  def index
    tasks = Task.all
    render json: tasks
  end

  def create
    Task.create(task_params)
    head :created
  end

  def destroy
    @task.destroy
    head :ok
  end

  def update
    @task.update(task_params)
    head :ok
  end

  private

  def task_params
    params.require(:task).permit(:name, :is_done)
  end

  def set_task
    @task = Task.find(params[:id])
  end
end
