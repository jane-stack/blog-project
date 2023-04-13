class User < ApplicationRecord
    has_secure_password
    has_many :blogs, dependent: :destroy
    has_many :comments, through: :blogs

    validates :username, presence: true, uniqueness: true
    validates :password, length: { minimum: 5 }
end
