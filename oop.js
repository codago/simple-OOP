"use strick"

class Mobil{
  constructor(merekBan, bulanProduksi, tahunProduksi){
    this.merekBan       = merekBan;
    this.bulanProduksi  = bulanProduksi;
    this.tahunProduksi  = tahunProduksi;
    this.kursi          = 3;
    this.pintu          = 4;
    this.jumlahRoda     = 4;

  }
}

class Avanza extends Mobil{
    constructor(merekBan, bulanProduksi, tahunProduksi){
      super(merekBan, bulanProduksi, tahunProduksi)
      this.kursi      = "3 baris";
      this.merk       = "Avanza";
    }
}

class Yaris extends Mobil{
    constructor(merekBan, bulanProduksi, tahunProduksi){
      super(merekBan, bulanProduksi, tahunProduksi)
      this.kursi      = 2;
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
       this.Avanza  = [];
       this.Yaris   = [];
     }

     produksiMobil(mobil){
       let jumlahProduksi = Math.floor((Math.random() * 25) + 1);
       for (let i = 0; i<jumlahProduksi; i++){
           if (mobil.merk == 'Avanza'){
               this.Avanza.push(mobil);
           }
           else if(mobil.merk == "Yaris"){
               this.Yaris.push(mobil);
           }
       }
     }

     hasilProduksi(){
        for (var i = 0; i < this.Avanza.length; i++) {
          console.log(this.Avanza[i]);
        }

        for (var i = 0; i < this.Ayla.length; i++) {
          console.log(this.Yaris[i]);
        }
      }


     cekGaransi(){
       this.lamaGaransi     = 5;
       this.tahunAcak       = Math.floor((Math.random() * 10) + 1);
       for (let i=0; i<this.Avanza.length; i++){
          this.tahunProduksi   = this.Avanza[i].tahunProduksi;
          this.garansi         = this.tahunAcak - this.tahunProduksi;
          if (this.garansi < this.lamaGaransi){
              this.statusGaransi = "garansi masih berlaku";
              console.log(this.statusGaransi);
          }
          else{
              this.statusGaransi = "garansi sudah expired";
              console.log(this.statusGaransi);
          }
      }
      for (let i=0; i<this.Yaris.length; i++){
         this.tahunProduksi   = this.Yaris[i].tahunProduksi;
         this.garansi         = this.tahunAcak - this.tahunProduksi;
         if (this.garansi < this.lamaGaransi){
             this.statusGaransi = "garansi masih berlaku selama";
             console.log(this.statusGaransi);
         }
         else{
             this.statusGaransi = "garansi sudah expired";
             console.log(this.statusGaransi);
         }
     }
    }
}

let Toyota = new pabrikMobil();
Toyota.produksiMobil(new Avanza(new ban("michelin"), "Januari", 2017));
console.log(Toyota.Avanza);
Toyota.cekGaransi();
