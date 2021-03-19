class PostSerializer
  include FastJsonapi::ObjectSerializer
  attributes :caption, :image, :user_id, :user, :comments
end
