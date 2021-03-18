class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def show 
        post = Post.find_by(id: params[:id])
    end

    def create
        post = Post.new(post_params)
        # @post.user_id = current_user.id
        # byebug
        if post.save
            render json: post
        else
            render json: {
                status: 500,
                errors: ["error"]
            }        
        end
    end

    private

    def post_params
        params.require(:post).permit(:caption, :image, :user_id)
    end
end
