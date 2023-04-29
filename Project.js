// super class for vehicles
class vehicle{   
    constructor(name, make, ID){
        this.name = name
        this.make = make
        this.ID = ID
    }
}

// a subclass of vehicle
class Car extends vehicle{
    static carIDs = []
    constructor(name, Make, ID, type){
        super(name,Make,ID)
        this.type = type
        Car.carIDs.push(ID)
    }
} 

// a subclass of vehicle
class Plane extends vehicle{
    static planeIDs = []
    constructor(name, Make, ID, type){
        super(name, Make, ID)
        this.type = type
        Plane.planeIDs.push(ID)
    }
} 

// superclass for employees
class Employee {
    constructor(name, DOB, ID){
        this.name = name
        this.DOB = DOB
        this.ID = ID
    }
}

// a subclass of employee
class Driver extends Employee {
        static driverIDs = []
    constructor(name, DOB, ID, licenseID){
        super(name,DOB,ID)
        this.licenseIDs = licenseID
        Driver.driverIDs.push(ID)
    }
}

// a subclass of employee
class Pilot extends Employee {
    static pioltIDs=[]
    constructor(name, DOB, ID, licenseID){
        super(name,DOB,ID)
        this.licenseID = licenseID
        Pilot.pioltIDs.push(ID)
    }
}

// a class for reservations
class Res {
    static reservations =[]
    constructor(resDate, employeeID, vehicleID, resID){
      this.reservation_Date = resDate
      this.employee_ID =employeeID 
      this.vehicles_ID =vehicleID
      this.reservation_ID = resID
    }
}

// Creating some car objects
const car1 = new Car('Chevrolet','Malibu','1','gas')
//console.log(car1);
const car2 = new Car('Corrolla','Toyota','2','electric')
//console.log(car2);
const car3 = new Car('Ford','Mustang','96','gas')
//console.log(car3);


// Creating some plane objects
const plane1 = new Plane('F-16 Fighting Falcon','General Dynamics','25','Fighter')
//console.log(plane1);
const plane2 = new Plane('boeing 747','Boeing','747','Cargo')
//console.log(plane2);


// creating 2 employees (1 pilot and 1 driver)
const pilot1 = new Pilot('Husam','2000-07-14','3','17000') 
//console.log(pilot1);
const driver1 = new Driver('Salman','2001-06-20','2','90230')
//console.log(driver1);


// method to check the compatability between an employee and a vehicle
function CheckCompatibility(employeeID,vehicleID){
            if(Driver.driverIDs.includes(employeeID) && Car.carIDs.includes(vehicleID)){
                let date =  new Date()
                let resDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                let resID =  Math.round(Math.random() * (999-100) + 100).toString()
                Res.reservations.push(new Res(resDate, employeeID, vehicleID, resID))
                console.log(`Driver ${employeeID} has been assigned to the car ${vehicleID}`)
            }
            else if(Pilot.pioltIDs.includes(employeeID) == true && Plane.planeIDs.includes(vehicleID) == true){
                let date =  new Date()
                let resDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
                let resID =  Math.round(Math.random() * (999-100) + 100).toString()
                Res.reservations.push(new Res(resDate, employeeID, vehicleID, resID))
                console.log(`Pilot ${employeeID} has been assigned to the plane ${vehicleID}`)
            }
            else {
                console.log(`The employee with the ID ${employeeID} is not qulifed to ride the vechicle with the ID ${vehicleID}.`)
            }

}


//testing use cases
CheckCompatibility(driver1.ID,car1.ID)
CheckCompatibility(pilot1.ID,plane1.ID)
CheckCompatibility(car3.ID, plane2.ID)


console.log('')
console.log('Reservations List:')
console.log('this needs to be worked on still')
console.log('Developer had a time issue :(')
console.log('but will finish it he promises :)') 
//printing the Reservations
// console.log(Res.reservations.map(function(elem){
//     return elem
// }))