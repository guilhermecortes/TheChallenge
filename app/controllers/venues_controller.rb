class VenuesController < ApplicationController

    def index
        unless params[:city].blank?
            @venues = Venue.get_by_city params[:city]
        end
    end

    def bounds
        unless params[:city].blank?
            #get suggested bounds through geokit
            if params[:city].downcase == 'london'
                res = Geokit::Geocoders::GoogleGeocoder.geocode('Greather London')
            else
                res = Geokit::Geocoders::GoogleGeocoder.geocode(params[:city])
            end
            suggested_bounds = res.suggested_bounds.to_s.split(",")

            sw_lat = suggested_bounds[0]
            sw_lng = suggested_bounds[1]
            ne_lat = suggested_bounds[2]
            ne_lng = suggested_bounds[3]
            @sw = "#{sw_lat},#{sw_lng}"
            @ne = "#{ne_lat},#{ne_lng}"

            @venues = Array.new #list of venues from a city
            all_venues = Venue.get_all
            all_venues.each do |venue|
                if venue.latitude >= sw_lat.to_f && venue.latitude <= ne_lat.to_f && venue.longitude >= sw_lng.to_f && venue.longitude <= ne_lng.to_f
                    @venues.push(venue)
                end
            end

            # the same as above, but using GEM
            # @venues = Venue.in_bounds([@sw, @ne], :origin => params[:city])
        end
    end

    def reverse_geocoding
        @venues = Venue.get_all
    end

end
