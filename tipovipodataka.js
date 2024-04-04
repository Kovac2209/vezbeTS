//Primitivni tipovi podataka
var godine = 25;
var ime = "Vukasin";
var studira = true;
//Kompleksni tipovi
var predmeti = ["EPOS", "Cloud", "Programiranje"];
var ocene = [10, 9, 8];
var ntorka = ["Vukasin", 21]; //tuples
var Modul;
(function (Modul) {
    Modul[Modul["TehnologijeElektronskogPoslovanja"] = 0] = "TehnologijeElektronskogPoslovanja";
    Modul[Modul["InformacioniSistemi"] = 1] = "InformacioniSistemi";
    Modul[Modul["SoftverskoInzenjerstvo"] = 2] = "SoftverskoInzenjerstvo"; //2
})(Modul || (Modul = {}));
var konkretniModul = Modul.TehnologijeElektronskogPoslovanja;
var Student = {
    ime: "Vukasin",
    godine: 22,
    studira: true
};
var brojIliString = 10;
var biloSta = "Ovo moze biti bilo sta";
function sayHello() {
    console.log("Hello");
}
var n = null;
var u = undefined;
var nekaVrednost = "Ovo je string";
var duzinaStringa = nekaVrednost.length;
console.log(godine, ime, studira);
console.log(predmeti, ocene);
console.log(ntorka);
console.log(konkretniModul);
console.log(Student);
console.log(brojIliString);
console.log(biloSta);
console.log(n, u);
console.log(duzinaStringa);
