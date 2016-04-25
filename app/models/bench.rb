class Bench < ActiveRecord::Base

  def Bench.in_bounds(bounds)
    # bounds in the following format:
    # {
    #   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
    #   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
    # }
    lng_east= bounds["northEast"]["lng"]
    lng_west = bounds["southWest"]["lng"]
    lat_north = bounds["northEast"]["lat"]
    lat_south = bounds["southWest"]["lat"]

    # TODO: Clean this up using Ruby syntax
    Bench.where(
      "
      lng < #{lng_east} AND
      lng > #{lng_west} AND
      lat < #{lat_north} AND
      lat > #{lat_south}
      "
    )
  end
end
