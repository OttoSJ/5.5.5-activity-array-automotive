//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
    super(make, model, year, color, mileage) 
        this.maximumPassengers = maximumPassengers
        this.passengers = passengers
        this.numberOfWheels = numberOfWheels
        this.maximumSpeed = maximumSpeed
        this.fuel = fuel
        this.scheduleService = scheduleService
    }

    loadPassenger(num) {
        if (this.passengers < this.maximumPassengers) {
            return
        }
    }

    start() {
        super.start()
        console.log("The engine has started!")
       
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
           this.scheduleService == true
           return this.scheduleService;
        }
    }
}