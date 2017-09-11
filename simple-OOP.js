"use strict"

class Car{
constructor(seat, door, tyre){
this.seat = seat;
this.door = door;
this.tyre = tyre;
}
}

class Lambo extends car { //menggunaakan inheritance (warisan)
  constructor(warranty){
  super(2, 2, new Tyre("corsa"))
  this.brand = "lambo"
  }
}

class Pajero extends car { //menggunaakan inheritance (warisan)
  constructor(warranty){
  super(7, 5, new Tyre("king"))
  this.brand = "pajero"
  }
}
class Tyre{
  constructor(merk){
    this.merk = merk;
  }
}

class CarFactory{
  constructor(){
    this.Lambos = [];
    this.Pajeros = [];
  }
  carProduksi(bulan, tahun){
    let total = Math.floor(Math.random()*10)+1;
    for (let x = 0; x<total; x++){
    this.Lambos.push(new Lambos(3,bulan,tahun))
  }
    let total = Math.floor(Math.random()*10)+1;
    for (let x = 0; x<total; x++){
    this.Pajeros.push(new Pajeros(4,bulan,tahun))
    }
}

simulateWarranty(){
  let addingYear = Math.floor((Math.random()* 10)+1);
  for (var x=0; x<this.Lambos.length; x++){
    if (addingYear>this.Lambos[x].warranty){
      this.Lambos[x].warrantyStatus = 'expired'
    }
  }
  console.log('Mitsubishi Pajero have been produced for ${this.Pajeros.length}');
  for(var x=0; x<this.Pajeros[x].warranty){
    if (addingYear>this.Pajeros[x].warranty){
    this.Pajeros[x].warrantyStatus = 'expired'
  }
 }
}

showProduksi(){
  console.log('Lamborghini have been produced for ${this.Lambos.length}');
  for (var x=0; x<this.Lambos.length; x++){
    console.log(this.Lambos[x]);
  }
  console.log('Mitsubishi Pajero have been produced for ${this.Pajeros.length}');
  for (var x=0; x<this.Pajeros.length; x++){
    console.log(this.Pajeros[x]);
  }
}
}

let carFactory = new CarFactory()
carFactory.carProduksi('January', 2017)
carFactory.carProduksi('February'2017)
carFactory.simulateWarranty()
carFactory.showProduksi()
