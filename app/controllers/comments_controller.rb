class CommentsController < ApplicationController

    # GET /blogs/:id/comments
    def index
        if params[:blog_id]
            blog = @current_user.blogs.find(params[:blog_id])
            comments = blog.comments
        else
            comments = Comment.all
        end
        render json: comments, include: :blog
    end

    def show
        comment = @current_user.comments.find(params[:id])
        render json: comment
    end

    def create
        comment = @current_user.comments.create(comment_params)
        render json: comment, status: 201
    end

    # POST /comments
    # def create
    #     blog = @current_user.blogs.find_by(id: params[:blog_id])
    #     if blog
    #         comment = Comment.create(comment_params)
    #         render json: comment, status: 201
    #     else
    #         render json: { errors: comment.errors.full_messages }, status: 422
    #     end
    # end

    # PATCH /comments/:id
    # def update
    #     comment = find_comment
    #     comment.update(comment_params)
    #     render json: comment
    # end

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
        params.permit(:reply, :user_id, :blog_id)
    end

end
