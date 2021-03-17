class PostsController < ApplicationController
    def index
        posts = Post.all
        render json: posts
    end

    def show 
        post = Post.find_by(id: (paarams[:id])
    end

    def create
        post = Post.new(post_params)
        post.user_id = session[:user_id]
        
        if post.save
            render :show
        else
            render ({ json: @post.errors.full_messages, status: 422 })
    end

    private

    def post_params
        params.require(:post).permit(:caption, :image)
    end
end
