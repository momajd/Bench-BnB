json.array! @benches do |bench|
  json.location bench.description
  json.lat bench.lat
  json.lng bench.lng
end
