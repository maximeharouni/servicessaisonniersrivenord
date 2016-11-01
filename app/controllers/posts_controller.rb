class PostsController < ApplicationController
#  before_filter :authenticate_request!

  def index
    @posts = Post.where(status: :active).all()
    render json: @posts
  end

  def create
    @post = Post.new(post_param)
    @post.save!
    render json: @post
  end

  def show
    @post = Post.find(params[:id])
    render json: @post
  end

  def update
    @post = Post.update(params[:id], post_param)
    render json: @post
  end

  def destroy
    @post = Post.update(params[:id], :status => :archived)
    render json: @post
  end

  def post_param
    params.require(:post).permit(:title, :content)
  end
end
