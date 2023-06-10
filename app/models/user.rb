class User < ApplicationRecord
    has_secure_password
    
    has_many :blogs, dependent: :destroy
    has_many :comments, through: :blogs
    has_many :commented_blogs, through: :comments, source: :blog
    
    validates :username, uniqueness: true, presence: true
end
