class Vehicle {
    constructor(make, model, year, color, mileage) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.passenger = 0;
        this.speed = 0;
        this.mileage = mileage;
        this.started = false;
        this.numberOfWheels = 0;
    }

    start() {
        if (this.fuel > 0) {
            return this.started = true;
            console.log("engine started...!!!");
        } else {
            return this.started = false;
            console.log("engine cannot start...");
        }
    }
    accelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                console.log(this.speed += 1);
                this.fuel = this.fuel - 1;
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    decelerate() {
        if (this.started) {
            if (this.fuel > 0) {
                if (this.speed > 0) {
                    console.log(this.speed -= 1);
                    this.fuel = this.fuel - 1;
                } else {
                    console.log(this + " has stopped moving");
                    this.fuel = this.fuel - 1;
                }
            } else {
                console.log("out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first.");
        }
    }
    stop() {
        this.started = false;
    }

    drive() {
        accelerate();
    }
    brake() {
        decelerate();
    }

    autoPark()
    {

    }

    autoDrive()
    {
      
    }

    typeOfVehicle(wheels) {
        if (this.numberOfWheels == 8 && 8 == wheels) {
            console.log(this.model + " " + this.make + " is a Truck");
        } else if (this.numberOfWheels == 4 && 4 == wheels) {
            console.log(this.model + " " + this.make + " is a CAr");
        } else if (this.numberOfWheels == 2 && 2 == wheels) {
            console.log(this.model + " " + this.make + " is a Bike");
        } else {
            console.log("Unknown type of vehicle");
        }
    }
}


class Car extends Vehicle {

    
    constructor(make, model, year, color, mileage, maximumPassengers, passengers, numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage) 
        this.maximumPassengers = 6
        this.passengers = passengers
        this.numberOfWheels = 4
        this.maximumSpeed = 200
        this.fuel = 100
        this.scheduleService = false
    }
    loadPassenger(passengers) {
        this.maximumPassengers = 6;
        const seatsAvialable = []
    
           if (this.passengers < this.maximumPassengers && this.maximumPassengers - this.passengers === 1) {
               return console.log("There is 1 seat available!" )
               
            } else if (this.maximumPassengers - this.passengers > 1)  { 
                this.seatsAvialable.push(this.maximumPassengers - this.passengers)
                return console.log("There are " + seatsAvialable + " available")
            } else {
                console.log("There are no more seats available")
            }
        
        
    }
   
    start() {
        if (this.fuel > 0) {
            console.log("Your vehicle has started!")
        }else {
            console.log("Vehicle won't start due to low fuel")
        }

       
    }

    scheduleService(mileage) {
        if (mileage > 30000) {
           this.scheduleService == true
           return this.scheduleService;
        }
    }

}



let myCar = new Car("BMW", "C Class", 2018, "grey", 25, 5, 2, 4, 150, 18, 10000)

console.log(myCar)
// myCar.loadPassenger(4)

//This exports things you want to use from this "module", more info in readme


module.exports = {
    Vehicle
}



