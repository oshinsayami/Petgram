class CommentSerializer
  include FastJsonapi::ObjectSerializer
  attributes :body, :user_id, :post_id, :user
end
