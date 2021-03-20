class CommentsController < ApplicationController
    def create
        comment = Comment.new(comment_params)

        if comment.save
            post = Post.find_by(id: comment.post_id)
            render json: post.to_json(include: [:comments, :user])
        else
            payload = {
                error: 'Something went wrong. Please try again',
                status: 400
            }
            render json: payload, status:bad_request
        end
    end


    def comment_params
        params.require(:comment).permit(:id, :body, :post_id, :user_id)
    end
end
