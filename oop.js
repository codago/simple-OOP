'use strict'

class CarFactory{
  constructor(){
    this.ProdukSuzuki = []
    // this.ProdukMitsubishi = []
    let now = new Date()
    this.currentYear = now.getYear()

  }
  produksiMobil(){
    let totalproduksi = Math.floor((Math.random() * 10) + 1)
    for (var i = 0; i < totalproduksi; i++) {
      this.ProdukSuzuki.push(new Suzuki ('pertalite', 5, 2012 ))
    }

    // let totalproduksi = Math.floor((Math.random() * 10) + 1)
    //   for (var i = 0; i < totalproduksi; i++) {
    //     this.ProdukMitsubishi.push(new Mitsubishi ( ))
    //     }
  }
  showProduction(){
    console.log('Produksi mobil Suzuki yang telah dibuat bulan ini: '+ this.ProdukSuzuki.length);
    for (var i=0; i<this.ProdukSuzuki.length; i++){
      console.log(this.ProdukSuzuki[i]);
    }

    // console.log('produksi mobil Misubishi yang telah dibuat bulan ini: '+ this.ProdukMitsubishi.length);
    // for (var i=0; i<this.ProdukMitsubishi.length; i++){
    //   console.log(this.ProdukMitsubishi[i]);
     }

  garansiCar(tambahTahun){

      for (var i = 0; i < this.ProdukSuzuki.length; i++) {
        if (this.ProdukSuzuki[i].tahun + this.ProdukSuzuki[i].garansi > this.currentYear + tambahTahun ){
          this.ProdukSuzuki[i].garansiStatus = 'expired'


        }
      }
    }
}//




  class Car {
    constructor(ban, kursi, pintu,tahun,garansi,garansiStatus){
      this.ban = ban;
      this.kursi = kursi;
      this.pintu = pintu;
      this.tahun=tahun;
      this.garansi=garansi;
      this.garansiStatus=garansiStatus;
    }
  }

  class Suzuki extends Car {
    constructor(fuel, garansi, tahun){
      super(new Ban("Bridgestone"),4,4,tahun,garansi,'berlaku');
      this.fuel=fuel
    }
  }

  // class Mitsubishi extends Car {
  //   constructor(fuel,garansi,tahun ){
  //     super(new Ban("Dunlop",4,4,garansi,bulan,tahun))
  //   }
  // }

  class Ban {
    constructor(merk){
      this.merk = merk;
    }
  }

  let carFactory = new CarFactory()
  carFactory.produksiMobil();
  carFactory.showProduction()
  carFactory.garansiCar(7)
  carFactory.showProduction()
