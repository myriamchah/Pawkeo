# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
SpotSearch.destroy_all
User.destroy_all
Spot.destroy_all

puts "User seed creation"
User.create!(
  email: "test@pawkeo.com",
  password: 'testpawkeo',
  password_confirmation: 'testpawkeo',
  first_name: 'Guillaume',
  last_name: 'Casile'
)

puts "SpotSearch seed creation"
SpotSearch.create!(
  start_time: Date.new,
  orig_lat: 48.8649,
  orig_lng: 2.3800699999999324,
  dest_lat: 47.9999,
  dest_lng: 2.3800699999999324,
  user_id: User.last[:id],
)


puts "1000 Spots seeds creation"
1000.times do
  puts "Spot created!"
  genlat = 48.85 + rand(0.0..0.03)
  genlng = 2.34 + rand(0.0..0.05)
Spot.create!(
  lng: genlng,
  lat: genlat,
)
end

puts "Seeds done"
