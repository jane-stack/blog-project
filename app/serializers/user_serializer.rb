class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :blogs
  has_many :comments, through: :blogs
end
