# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

User.destroy_all
Blog.destroy_all

# Users
jane = User.create(username: "janeur", password: "12345")
jimmy = User.create(username: "jvng", password: "testing")

# Blogs
post_one = Blog.create(title: "First Post", description: "Hello online world. It is nice to code!", user: jane)
post_two = Blog.create(title: "Second Post", description: "This is a big headache. I am so stressed out.", user: jane)
post_three = Blog.create(title: "Third Post", description: "Work is so demanding! Can't wait to get home to my family.", user: jimmy)
