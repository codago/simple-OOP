class PabrikMobil{
  constructor(){
    this.produksi = [];
  }
  buatMobil(Mobil, bulan, tahun){
    this.prodak = [];
    this.menghasilkan= Math.floor(Math.random()*10);
    for (let x = 0; x <this.menghasilkan; x++){
      this.prodak.push(Mobil, bulan, tahun);
      this.produksi.push(this.prodak);
    }
  }
  jumlahProduksi(bulanPembuatan){
    let y = 0;
    for (let x = 0; x < this.produksi.length; x++){
      if (bulanPembuatan == this.produksi[x][1]){
        y++
      }
    }
    console.log('jumlah Produksi bulan'+bulanPembuatan+' = '+y+'mobil\n');
  }

  Garansi(){
    this.maxGaransi = 5;
    this.tahunSekarang = Math.floor(Math.random() * (10)) + 2017;
    for (let i = 0; i<this.produksi.length; i++){
      if(this.tahunSekarang - (this.produksi[i][2]) > 5){
        console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi expired');
      }else {
        console.log('mobil '+(i+1)+' Produksi Tahun '+ this.produksi[i][2]+' garansi Masih Berlaku');
      }
    }
  }
}

class Mobil {
  constructor (ban, kursi, pintu){
    this.ban = ban;
    this.kursi = kursi;
    this.pintu = pintu;
  }
}

class Fortuner extends Mobil {
  constructor (ban, kursi, pintu){
    super(ban, kursi, pintu)
  }
}

class Ferarri extends Mobil {
  constructor (ban, kursi, pintu){
    super(ban, kursi, pintu)
  }
}

class Ban {
  constructor(merk){
    this.merk = merk;
  }
}

let toyota = new PabrikMobil();
toyota.buatMobil(new Ferarri (new Ban("michelin"),2,2),'pebruari',2017);
toyota.jumlahProduksi('Febuary');
toyota.Garansi();
