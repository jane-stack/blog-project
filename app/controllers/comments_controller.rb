class CommentsController < ApplicationController

    # GET /comments
    def index
        render json: @current_user.comments.all
    end

    # POST /comments
    def create
        blog = @current_user.blogs.find_by(id: params[:blog_id])
        if blog
            comment = Comment.create!(comment_params)
            render json: comment, status: 201
        else
            render json: { errors: comment.errors.full_messages }, status: 422
        end
    end

    private

    def comment_params
        params.permit(:reply, :blog_id, :user_id)
    end

end
