class CarFactory {
    constructor() {
        this.cars = [];
        this.quantity = 0;
    }

    produceCars(car) {
        let quantity = this.randomProductions()
        for (let i = 0; i < quantity; i++) {
            if (car.merk === 'Avanza'){
                this.cars.push(car);
                car.getProductionYear();
                let currYear = car.getCurrentYear()
                let quarantee = car.quarantee_simulations(currYear);
                console.log(this.cars[i])
                if(quarantee === 0){
                  console.log("car already expired");
                }else{
                  console.log("car quarantee : "+quarantee+" years")
                }
                console.log("=================================");
            }else if(car.merk === 'Toyota'){
                this.cars.push(car);
                let currYear = car.getCurrentYear()
                let quarantee = car.quarantee_simulations(currYear);
                console.log(this.cars[i])
                if(quarantee === 0){
                  console.log("car already expired");
                }else{
                  console.log("car quarantee : "+quarantee+" years")
                }
                console.log("=================================");
            }else if(car.merk === 'Mercedes'){
                this.cars.push(car);
                let currYear = car.getCurrentYear()
                let quarantee = car.quarantee_simulations(currYear);
                console.log(this.cars[i])
                if(quarantee === 0){
                  console.log("car already expired");
                }else{
                  console.log("car quarantee : "+quarantee+" years")
                }
                console.log("=================================");
            }
        }
        console.log ("total cars produce monthly " + this.cars.length + " cars");
    }

    randomProductions() {
        this.quantity = Math.round(Math.floor(Math.random() * 30) + 1 / 100);
        return this.quantity;
    }
}

class Car {
    constructor(ban, kursi, pintu, roda) {
        this.ban = ban;
        this.kursi = kursi;
        this.pintu = pintu;
        this.roda = roda;
        this.production_year = 0;
        this.expire = false;
        this.currYear = 0;
        this.fixedQuarantee = 5;
    }

    getProductionYear(){
         this.production_year = Math.floor(Math.random() * (2016 - 2010 + 1)) + 2010;
         return this.production_year;
    }

    getCurrentYear() {
        this.currYear = Math.floor(Math.random() * (2020 - 2017 + 1)) + 2017;
        return this.currYear
    }

    quarantee_simulations(currentYear) {
        var quarantee = currentYear - this.production_year;
        if(quarantee <= this.fixedQuarantee){
          this.expire = false;
          return quarantee
        }else{
          this.expire = true;
          return 0;
        }

    }
}

class Avanza extends Car{
    constructor(ban,kursi,pintu,roda,merk){
        super(ban,kursi,pintu,roda);
        this.merk = "Avanza";
    }
}

class Toyota extends Car{
     constructor(ban,kursi,pintu,roda,merk){
        super(ban,kursi,pintu,roda);
        this.merk = "Toyota";
    }
}

class Mercedes extends Car{
     constructor(ban,kursi,pintu,roda,merk){
        super(ban,kursi,pintu,roda);
        this.merk = "Mercedes";
    }
}

class Tyre {
    constructor(merk) {
        this.merk = merk;
    }
}


let carFactory = new CarFactory();
// carFactory.randomProductions();
carFactory.produceCars(new Avanza(new Tyre("michelin"),4,2,5));
// carFactory.produceCars(new Toyota(new Tyre("continental"),2,4,4));
// carFactory.produceCars(new Mercedes(new Tyre("goodyear"),4,2,3));
