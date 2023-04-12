class CommentSerializer < ActiveModel::Serializer
  attributes :id, :reply
  has_one :user
  has_one :blog
end
