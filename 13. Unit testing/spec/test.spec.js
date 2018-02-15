var CarBuilder = require("../lib/builder.js");

describe("running jasmine in jsfiddle", function(){
it("should test car builder", function(){
    // Given
    var builder = new CarBuilder();
    // When
    builder
        .reset()
        .setSeats(2)
        .setTripComputer(true)
        .setGPS(true)
        .setTyreSize('big');

    var car = builder.getResult();

    // Then
    expect(car.getSeats()).toEqual(2);
    expect(car.getTripComputer()).toEqual(true);
    expect(car.getGps()).toEqual(true);
    expect(car.getTyreSize()).toMatch('big');
    });
});