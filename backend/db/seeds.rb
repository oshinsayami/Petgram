# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all

jack= User.create(username: "jack11", email: "jack@gmail.com", password:"password")
kelly= User.create(username: "kelly01", email: "kelly@gmail.com", password: "password")

post1= Post.create(caption:"The view", user_id: jack.id, image:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg")

comment1 = Comment.create(body:"Beautiful", user_id: kelly.id, post_id: post1.id, username:"kelly")