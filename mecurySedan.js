//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass.js")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {

    
    constructor(maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
    super(make, model, year, color, mileage) 
        this.maximumPassengers = 6
        this.passengers = 0
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }
    loadPassenger(passengers) {
        let maximumPassengers = 6;
        const seatsAvialable = []
    
           if (passengers < maximumPassengers && maximumPassengers - passengers === 1) {
               return console.log("There is 1 seat available!" )
               
            } else if (maximumPassengers - passengers > 1)  { 
                seatsAvialable.push(maximumPassengers - passengers)
                return console.log("There are " + seatsAvialable + " available")
            } else {
                console.log("There are no more seats available")
            }
        
        
    }
   
    start() {
        super.start() 

       
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
           this.scheduleService == true
           return this.scheduleService;
        }
    }
}

let myCar = new Car(5, 2, 4, 150, 18, 10000, "BMW", "C Class", 2018, "grey", 25)

console.log(myCar)