"use strict"

class CarFactory {
  constructor(){
    this.production = [];
  }

carProduction(Car, monthProduction, yearProduction){
  this.product = [];
  this.produce = Math.floor(Math.random() *10);
  for (let x = 0; x < this.produce; x++) {
    this.product.push(Car, monthProduction, yearProduction);
    this.production.push(this.product);
  }
}

amountProduction(month){
  let y = 0;
  for (let x = 0; x < this.production.length; x++) {
    if(month == this.production[x][1]){
      y++;
    }
  }
  console.log('Amount Production In'+month+'='+y+' car\n');
}

guaranteeCheck(){
    this.maxGuarantee = 5;
    this.present =Math.floor(Math.random() * (10)) + 2017;
    for (let i = 0; i < this.production.length; i++) {
      if (this.present-(this.production[i][2]) > 5 ) {
        console.log('car'+(i+1)+' Year production '+this.production[i][2]+'Guarantee Expired');
      }else {
        console.log('car'+(i+1)+' Year production'+this.production[i][2]+'Guarantee Valid');
      }
    }
  }

}
class Car {
  constructor(tyre, door, seat) {
    this.tyre = tyre;
    this.door = door;
    this.seat = seat;
  }
}

class Lexus extends Car {
  constructor(tyre, door, seat){
    super(tyre, door, seat)
  }
}

class Harrier extends Car {
  constructor(tyre, door, seat){
    super(tyre, door, seat)
  }
}

class Tyre {
  constructor(brand){
    this.brand = brand
  }
}

let toyota = new CarFactory();
toyota.carProduction(new Lexus (new Tyre("michelin"),4,4),'Februari',2017);
toyota.amountProduction('Februari');
toyota.guaranteeCheck();
