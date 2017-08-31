"use strict"

class Car{
  constructor(tyre, seat, door, month, year){
    this.tyre=tyre;
    this.seat=seat;
    this.door=door;
    this.month=month;
    this.year=year;

  }
}

class Avanza extends Car{
  constructor(warranty, month, year){
    super(new Tyre('bridgestone'), 7, 5, month, year)
    this.logo="avanza"
    this.warranty=warranty
    this.warrantyStatus='valid'
  }
}

class Ayla extends Car{
  constructor(warranty, month, year){
    super(new Tyre('Toyotire'), 5, 5, month, year)
    this.logo="ayla"
    this.warranty=warranty
    this.warrantyStatus='valid'
  }
}

class Tyre{
  constructor(merk){
    this.merk = merk
  }
}

class CarFactory{
  constructor(){
    this.Avanzas=[];
    this.Aylas=[];
  }
  carProduce(month, year){
    let total =  Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < total; i++) {
      this.Avanzas.push(new Avanza(3, month, year))
    }
    total =  Math.floor((Math.random() * 10) + 1);
    for (let i = 0; i < total; i++) {
      this.Aylas.push(new Ayla(5, month, year))
    }
  }

  simulateWarranty(){
    let addingYear =  Math.floor((Math.random() * 10) + 1);
    for (var i = 0; i < this.Avanzas.length; i++) {
      if (addingYear>this.Avanzas[i].warranty){
        this.Avanzas[i].warrantyStatus = 'expired'
      }
    }
    console.log(`Daihatsu Ayla have been produced for ${this.Aylas.length}`);
    for (var i = 0; i < this.Aylas.length; i++) {
      if (addingYear>this.Aylas[i].warranty){
        this.Aylas[i].warrantyStatus = 'expired'
      }
    }
  }

  showProduction(){
    console.log(`Toyota Avanza have been produced for ${this.Avanzas.length}`);
    for (var i = 0; i < this.Avanzas.length; i++) {
      console.log(this.Avanzas[i]);
    }
    console.log(`Daihatsu Ayla have been produced for ${this.Aylas.length}`);
    for (var i = 0; i < this.Aylas.length; i++) {
      console.log(this.Aylas[i]);
    }
  }
}

let carFactory = new CarFactory()
carFactory.carProduce('January', 2017)
carFactory.carProduce('February', 2017)

carFactory.simulateWarranty()
carFactory.showProduction()
