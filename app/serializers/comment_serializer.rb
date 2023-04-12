class CommentSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :reply
  has_one :user
  has_one :blog
end
