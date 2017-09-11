"use strict"

class Mobil{
  constructor(merekBan){
    this.merekBan       = merekBan;
    this.kursi          = "2 Baris";
    this.pintu          = "4 Pintu";
    this.merk           = "";
  }
}

class Avanza extends Mobil{
    constructor(merekBan){
      super(merekBan)
      this.kursi      = "3 baris";
      this.merk       = "Avanza";
    }
}

class Yaris extends Mobil{
    constructor(merekBan){
      super(merekBan)
      this.merk       = "Yaris";
    }
}

class ban{
   constructor(merk){
     this.merk  = merk;
   }
 }

class pabrikMobil{
     constructor(){
      this.produksi = [];
     }

     produksiMobil(mobil, bulanProduksi, tahunProduksi){
       let jumlahProduksi = Math.floor((Math.random() * 25) + 1);
       this.produk = [];
       for (let i = 0; i<jumlahProduksi; i++){
            this.produk.push(mobil, bulanProduksi, tahunProduksi);
            this.produksi.push(this.produk);
       }
     }

     jumlahProduksi(bulan){
       let y=0;
       for(let x=0; x<this.produksi.length; x++){
         if(bulan == this.produksi[x][1]){
           y++;
         }
       }
       console.log('Mobil yang di produksi bulan '+bulan +' sebanyak '+y+' mobil\n');
     }

     cekGaransi(){
       this.lamaGaransi = 5;
       this.tahunSekarang =Math.floor(Math.random() * (10)) + 2017;
       for (let i = 0; i < this.produksi.length; i++) {
         if (this.tahunSekarang-(this.produksi[i][2]) > 5 ) {
           console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi expired');
         }else {
           console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi Masih Berlaku');
         }
       }
     }
}

let Toyota = new pabrikMobil();
Toyota.produksiMobil(new Avanza(new ban("michelin")), "januari", 2017);
Toyota.produksiMobil(new Yaris(new ban("michelin")), "januari", 2017);
Toyota.jumlahProduksi("januari")
Toyota.cekGaransi();
//console.log(Toyota.produksi);
