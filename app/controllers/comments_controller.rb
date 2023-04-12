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

    # PATCH /comments/:id
    def update
        comment = find_comment
        comment.update(comment_params)
        render json: comment
    end

    # DELETE /comments/:id
    def destroy
        comment = find_comment
        comment.destroy
        head :no_content
    end

    private

    def find_comment
        Comment.find(params[:id])
    end

    def comment_params
        params.permit(:reply, :blog_id, :user_id)
    end

end
