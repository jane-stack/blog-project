class BlogsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET /blogs
    def index
        render json: @current_user.blogs.all
    end

    # POST /blogs
    def create
        blog = @current_user.blogs.create(blog_params)
        render json: blog, status: 201
    end

    # PATCH /blogs/:id
    def update
        blog = find_blog
        blog.update(blog_params)
        render json: blog
    end

    # DESTROY /blogs/:id
    def destroy
        blog = find_blog
        blog.destroy
        head :no_content
    end

    private

    def render_not_found_response
        render json: { errors: "Blog not found" }, status: 404 # not_found
    end
    
    def find_blog
        Blog.find(params[:id])
    end

    def blog_params
        params.require(:blog).permit(:title, :description)
    end
end
