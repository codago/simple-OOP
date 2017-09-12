"use strick"
class CarFactory{
  constructor(){
    this.subaruList = []
    this.suzukiList = []
    let now = new Date()
   this.currentYear = now.getYear()
  }

  carProduce(car, month, year){
    let totalProd = Math.floor((Math.random() * 10) + 1);
    for (var i = 0; i < totalProd; i++) {
      this.suzukiList.push(new suzuki("ASG", 2007, 5))
    }
      let totProd = Math.floor((Math.random() * 10) + 1);
      for (var i = 0; i < totProd; i++) {
        this.subaruList.push(new Subaru("DOHC", 2010, 5))
      }
  }

  showProduction(){
    console.log('produksi mobil Subaru yang telah dibuat perbulan: '+ this.subaruList.length);
    for (var i=0; i<this.subaruList.length; i++){
      console.log(this.subaruList[i]);
    }
    console.log('produksi mobil suzuki yang telah dibuat perbulan: '+this.suzukiList.length);
    for (var i=0; i<this.suzukiList.length; i++){
      console.log(this.suzukiList[i]);
    }
  }
  simulasiWarranty(tambahTahun){

 for (var i = 0; i < this.subaruList.length; i++) {
   if (this.subaruList[i].year + this.subaruList[i].warranty > this.currentYear + tambahTahun ){
     this.subaruList[i].warrantyStatus = 'expired'

   }
     }
 }
}

class Car{
  constructor(door,seat,tyre, year, warranty, warrantyStatus){
    this.door = door
    this.seat = seat
    this.tyre = tyre
    this.year = year
    this.warranty = warranty;
    this.warrantyStatus = warrantyStatus;
  }
}

class Subaru extends Car {
  constructor(boxerEngine, year, warranty){
    super(4, 5, new Tyre("17inch", "bridgestone"), year, warranty, 'valid')
    this.boxerEngine = boxerEngine
  }
}

class suzuki extends Car {
  constructor(ledLamp, year, warranty){
    super(4, 5, new Tyre("16inch", "Dunlop"), year, warranty, 'valid')
    this.ledLamp = ledLamp
  }
}

class Tyre{
  constructor(size,merk){
    this.size = size
    this.merk = merk
  }
}

let pabrik = new CarFactory()
pabrik.carProduce();
pabrik.showProduction()
pabrik.simulasiWarranty(3)
pabrik.showProduction()
