class CarFactory {
  constructor (){
    this.ListAvanza = []
    this.ListVitara = []
    let now = new Date()
    this.currentYear = now.getYear()
  }

  produksi(){
    //push ke ListAvanza or ListVitara[]
    let totalproduksi = Math.floor((Math.random() * 10) + 1)
    for (var i = 0; i < totalproduksi; i++) {
      this.ListAvanza.push(new Avanza ('red', 2017 ,3))
    }
    let totproduksi = Math.floor((Math.random() * 10) + 1)
    for (var i = 0; i < totproduksi; i++) {
    this.ListVitara.push(new Vitara ('red', 2015, 4))
    }
}

  hasilProduksi(){
      console.log('Hasil Produksi Avanza di pabrik ini adalah : ' + this.ListAvanza.length + " " + 'unit');
    for (var i = 0; i < this.ListAvanza.length; i++) {
      console.log(this.ListAvanza[i] )
    }

      console.log('Hasil Produksi Grand Vitara di pabrik ini adalah : ' + this.ListVitara.length + " " + 'unit');
    for (var i = 0; i < this.ListVitara.length; i++) {
        console.log(this.ListVitara[i])
    }
}

  simulasiWarranty(tambahTahun){
  for (var i = 0; i < this.ListAvanza.length; i++) {
    if (this.ListAvanza[i].year + this.ListAvanza[i].warranty > this.currentYear + tambahTahun ){
      this.ListAvanza[i].warrantyStatus = 'expired'
    }
      for (var i = 0; i < this.ListVitara.length; i++) {
      if (this.ListVitara[i].year + this.ListVitara[i].warranty > this.currentYear + tambahTahun ){ //Tahun ini + Tahun dari data yang di tulis sebelumnya
        this.ListVitara[i].warrantyStatus = 'expired'
      }
      }
  }
}
}
class Car{
  constructor (ban, pintu, kursi, year, warranty, warrantyStatus){
    this.ban = ban;
    this.pintu = pintu;
    this.kursi = kursi;
    this.year = year;
    this.warranty = warranty;
    this.warrantyStatus = warrantyStatus;
  }
}

class Avanza extends Car{
  constructor (warna, year, warranty){
    super (4, 5, new Tyre('4"', "Bridgestone"), year, warranty, 'valid' )
    this.warna = warna
  }
}

class Vitara extends Car{
  constructor (LedLamp, year, warranty){
    super ('blue', 5, new Tyre('4"', "Bridgestone"), year, warranty, 'valid')
    this.LeadLamp = LedLamp
  }
}

class Tyre{
  constructor (size, merk){
    this.size = size
    this.merk = merk
  }
}
let pabrik = new CarFactory ()
pabrik.produksi ()
pabrik.hasilProduksi()
pabrik.simulasiWarranty(5)
pabrik.hasilProduksi()
