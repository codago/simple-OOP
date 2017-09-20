
"use strict"

class Car{
  constructor(ban, kursi, pintu , bulan, tahun){
    this.ban=ban;
    this.kursi=kursi;
    this.pintu=pintu;
    this.bulan=bulan;
    this.tahun=tahun;
  }
}

class Avanza extends Car {
  constructor(garansi, bulan, tahun){
    // console.log(garansi, bulan, tahun, 'tes avanza');
    super(new Ban("bridgestone"),6,4, bulan, tahun)
    this.garansi=garansi
    this.statusGaransi="ada"
  }
}

class Xenia extends Car{
  constructor(garansi, bulan, tahun){
    super(new Ban("michelin"),7,5, bulan, tahun)
    this.garansi=garansi
    this.statusGaransi="ada"
  }
}


class Ban{
  constructor(merk){
    this.merk=merk

  }
}

class CarFactory{
  constructor(){
    this.Avanza=[]
    this.Xenia=[]
  }
  buatMobil(bulan,tahun){
    let total =  Math.floor((Math.random() * 10) + 1);
    for(let x=0;x<total;x++){
    // this.Avanza =new Avanza
    //console.log(new Avanza(5,bulan,tahun), 'ini tes');
    this.Avanza.push(new Avanza(5,bulan,tahun))
  }
    total =  Math.floor((Math.random() * 10) + 1);
    for(let y=0;y<total;y++){
    // this.Xenia=new Xenia
    this.Xenia.push(new Xenia(4,bulan,tahun))
  }
  }



Garanssi(){
  let tambahWaktu=Math.floor(Math.random()*11)
  for(var x=0;x < this.Avanza.length;x++){
    if(tambahWaktu > this.Avanza[x].garansi){
      this.Avanza[x].statusGaransi="tidak ada"
    }
}
console.log("Xenia telah diproduksi"+this.Xenia.length)
for(var y=0;y < this.Xenia.length;y++){
  if(tambahWaktu > this.Xenia[y].garansi){
    this.Xenia[y].statusGaransi="tidak ada"
  }
}
}
  Produksi(){
    console.log("Avanza telah diproduksi"+this.Avanza.length)
    for(let x =0;x< this.Avanza.length;x++){
        console.log(this.Avanza[x])
    }
    console.log("Xenia telah diproduksi"+this.Xenia.length)
    for(let y=0;y< this.Xenia.length;y++){
      console.log(this.Xenia[y])
    }
  }
}
let carFactory = new CarFactory()
carFactory.buatMobil("januari",2017)
carFactory.buatMobil("agustus",2018)

carFactory.Garanssi()
  carFactory.Produksi()
