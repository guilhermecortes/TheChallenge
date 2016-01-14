class Venue < ActiveRecord::Base

    acts_as_mappable :lat_column_name => :latitude,
                     :lng_column_name => :longitude

    def self.get_all
        Venue.select('id, name, latitude, longitude').all
    end

    def self.get_by_city city
        Venue.within(50, :origin => city)
    end

end
