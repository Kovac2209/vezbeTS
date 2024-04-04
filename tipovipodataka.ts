//Primitivni tipovi podataka
let godine:number  = 25;
let ime:string = "Vukasin";
let studira:boolean = true;
//Kompleksni tipovi
let predmeti:string[]=["EPOS","Cloud","Programiranje"];
let ocene:number[]=[10,9,8];
let ntorka:[string,number]=["Vukasin",21];//tuples

enum Modul{
    TehnologijeElektronskogPoslovanja, //0
    InformacioniSistemi, //1
    SoftverskoInzenjerstvo //2
}
let konkretniModul:Modul=Modul.TehnologijeElektronskogPoslovanja;

let Student:{ime:string,godine:number,studira:boolean}={
    ime:"Vukasin",
    godine:22,
    studira:true
};

let brojIliString:number|string=10;
let biloSta:any="Ovo moze biti bilo sta";

function sayHello():void{
    console.log("Hello");
}

let n:null = null;
let u:undefined=undefined;

let nekaVrednost:any="Ovo je string";
let duzinaStringa:number=(nekaVrednost as String).length;

console.log(godine,ime,studira);

console.log(predmeti,ocene);

console.log(ntorka);
console.log(konkretniModul);
console.log(Student);
console.log(brojIliString);
console.log(biloSta);
console.log(n,u);
console.log(duzinaStringa);