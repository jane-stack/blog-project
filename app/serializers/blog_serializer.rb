class BlogSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  has_one :user
  has_many :comments
end
