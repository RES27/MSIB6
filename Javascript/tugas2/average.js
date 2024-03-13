/*
    Terdapat sebuah array dibawah bernama arr.
    1. Cobalah untuk mencari rata-rata dari array tersebut dengan menggunakan for loop (bukan dihitung manual)
    2. Lalu tampilkan hasil rata-rata tersebut pada terminal
*/

var arr = [
  52, 10, 34, 98, 75, 84, 102, 73, 86, 95, 42, 52, 68, 94, 43, 87, 123,
];


var jumlahElemen = arr.length;
var jumlahTotal = 0;


for (var i = 0; i < jumlahElemen; i++) {
  jumlahTotal += arr[i];
}


var rataRata = jumlahTotal / jumlahElemen;


console.log("Rata-rata dari array adalah: " + rataRata);