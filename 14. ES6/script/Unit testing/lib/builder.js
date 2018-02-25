class Car {
  constructor(seat, tripComputed, gps, size) {
    this.seat = seat;
    this.tripComputed = tripComputed;
    this.gps = gps;
    this.size = size;
  }

  getSeats() {
    return this.seat;
  }

  getTripComputer() {
    return this.tripComputed;
  }

  getGps() {
    return this.gps;
  }

  getTyreSize() {
    return this.size; 
  }
}

class CarBuilder {
  constructor() {
    this.child = new Car();
    this.reset();
  }

  reset() {
    this.child.seat = 4;
    this.child.tripComputed = false;
    this.child.gps = false;
    this.child.size = "medium";
    return this;
  }

  setSeats(seat) {
    this.child.seat = seat;
    return this;
  }

  setTripComputer(tripComputed) {
    this.child.tripComputed = tripComputed;
    return this;
  }

  setGPS(gps) {
    this.child.gps = gps;
    return this;
  }

  setTyreSize(size) {
    this.child.size = size;
    return this;
  }

  getResult() {
    let Lada = new Car(
      this.child.seat,
      this.child.tripComputed,
      this.child.gps,
      this.child.size
    );
    return Lada;
  };
}

module.exports = CarBuilder;
