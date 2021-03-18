# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


jack= User.create(username: "jack11", email: "jack@gmail.com", password:"password")

post1= Post.create(caption:"The view", user_id: jack.id, image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg")