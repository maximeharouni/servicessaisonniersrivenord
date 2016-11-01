class UsersController < ApplicationController
#  before_filter :authenticate_request!

  def index
    @users = User.all.order(created_at: :desc)
    render json: @users
  end

  def create
    @user = User.new(user_params)
    @user.save!
    render json: @user
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.update(params[:id], user_params)
    render json: @user
  end

  def destroy

  end

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :name, :lastName)
  end
end
