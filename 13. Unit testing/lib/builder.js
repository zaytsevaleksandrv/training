function Car(seat, tripComputed, gps, size) {
    this.seat = seat;
    this.tripComputed = tripComputed;
    this.gps = gps;
    this.size = size;
}
Car.prototype.getSeats = function() {
    return this.seat;
}
Car.prototype.getTripComputer = function () {
    return this.tripComputed;
}
Car.prototype.getGps = function () {
    return this.gps;
}
Car.prototype.getTyreSize = function () {
    return this.size;
}

function CarBuilder() {
    this.child = new Car();
    this.child2 = new Car();
    this.reset();
}
CarBuilder.prototype.reset = function() {
    this.child.seat = 4;
    this.child.tripComputed = false;
    this.child.gps = false;
    this.child.size = 'medium';
    return this;
}
CarBuilder.prototype.setSeats = function(seat) {
    this.child.seat = seat;
    return this;
}
CarBuilder.prototype.setTripComputer = function(tripComputed) {
    this.child.tripComputed = tripComputed;
    return this;
}
CarBuilder.prototype.setGPS = function(gps) {
    this.child.gps = gps;
    return this;
}
CarBuilder.prototype.setTyreSize = function(size) {
    this.child.size = size;
    return this;
}
CarBuilder.prototype.getResult = function() {
    var Lada = new Car(
        this.child.seat,
        this.child.tripComputed,
        this.child.gps,
        this.child.size
    );
    return Lada;
}

module.exports = CarBuilder;