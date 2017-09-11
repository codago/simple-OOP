"use strict"

class CarFactory{
  constructor(){
    this.produksi = [];

  }

  buatMobil(Car, bulanPoduksi, tahunProduksi){
    this.produk = [];
    this.produce= Math.floor(Math.random() *10);
    for(let x=0; x<this.produce; x++){
      this.produk.push(Car, bulanPoduksi, tahunProduksi);
      this.produksi.push(this.produk);
    }
  }

  jumlahProduksi(bulan){
    let y = 0;
    for( let x = 0; x<this.produksi.length; x++){
      if(bulan == this.produksi[x][1]){
        y++;
      }
    }
    console.log('jumlah Produksi Bulan '+bulan +' = '+y+' mobil\n');
  }

  cekGaransi(){
    this.maxGaransi = 5;
    this.tahunSekarang =Math.floor(Math.random() * (10)) + 2017;
    for (let i = 0; i < this.produksi.length; i++) {
      if (this.tahunSekarang-(this.produksi[i][2]) > 5 ) {
        console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi expired');
      }else {
        console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi Masih');
      }
    }

  }

}

class Car {
  constructor(ban, kursi, pintu){
    this.ban = ban;
    this.kursi = kursi;
    this.pintu = pintu;
  }
}

class avanza extends Car {
  constructor(ban, kursi, pintu ){
    super(ban, kursi, pintu);
  }
}

class alpard extends Car {
  constructor(ban, kursi, pintu ){
    super(ban, kursi, pintu)
  }
}

class Tyre {
  constructor(merk){
    this.merk = merk;
  }
}


let toyota = new CarFactory();
// toyota.buatMobil(new avanza (new Tyre("michelin"),4,4),'januari',2017);
// toyota.buatMobil(new alpard (new Tyre("michelin"),4,4),'januari',2017);
// toyota.buatMobil(new avanza (new Tyre("michelin"),4,4),'pebruari',2017);
toyota.buatMobil(new alpard (new Tyre("michelin"),4,4),'pebruari',2017);
toyota.jumlahProduksi('pebruari');
toyota.cekGaransi();
