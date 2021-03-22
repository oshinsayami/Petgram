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

toto= User.create(username: "Toto", email: "toto@gmail.com", password:"password")
milo= User.create(username: "Milo", email: "milo@gmail.com", password: "password")


post1= Post.create(caption:"This is me", user_id: toto.id, image:"https://d17fnq9dkz9hgj.cloudfront.net/uploads/2020/04/shelter-dog-cropped-1.jpg")
post2= Post.create(caption:"Small me", user_id: milo.id, image:"https://s3-prod.adage.com/s3fs-public/iStock-1094806232.jpg")
post3= Post.create(caption:"Look at me", user_id: toto.id, image:"https://www.milofoundation.org/wp-content/uploads/2021/02/hello-1-scaled-e1612913435618-300x300.jpeg")


comment1 = Comment.create(body:"So cute", user_id: toto.id, post_id: post2.id, username:"toto")
comment1 = Comment.create(body:"woof woof", user_id: milo.id, post_id: post1.id, username:"Milo")
