function CarBuilder() {}
CarBuilder.prototype.reset = function() {
    this.seat = 0;
    this.tripComputed = 0;
    this.gps = 0;
    this.size = 0;
    return this;
};
CarBuilder.prototype.setSeats = function(seat) {
  this.seat = seat || 2;
  return this;
};
CarBuilder.prototype.setTripComputer = function(tripComputed) {
  this.tripComputed = tripComputed || true;
  return this;
};
CarBuilder.prototype.setGPS = function(gps) {
  this.gps = gps || true;
  return this;
};
CarBuilder.prototype.setTyreSize = function(size) {
  this.size = size || 'big';
  return this;
};
CarBuilder.prototype.getResult = function() {
    return { 
        getSeats: function() {
            CarBuilder.prototype.setSeats.call(this);
            return this.seat;
        }, 
        getTripComputer: function() {
            CarBuilder.prototype.setTripComputer.call(this);
            return this.tripComputed;
        }, 
        getGps: function() {
            CarBuilder.prototype.setGPS.call(this);
            return this.gps;
        },
        getTyreSize: function() {
            CarBuilder.prototype.setTyreSize.call(this);
            return this.size;
        } 
    };
}

module.exports = CarBuilder;