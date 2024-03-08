/*
 * Tolong perhatikan secara SEKSAMA Langkah berikut ini
 * 1. Buatlah sebuah kondisi untuk menentukan sebuah nilai mata kuliah, dengan kondisi
 *    - Jika nilai lebih dari atau sama dengan 80 maka akan muncul tulisan "Sangat Bagus" pada terminal
 *    - Jika nilai lebih dari atau sama dengan 70 dan kurang dari 80 maka akan muncul tulisan "Bagus" pada terminal
 *    - Jika nilai lebih dari atau sama dengan 60 dan kurang dari 70 maka akan muncul tulisan "Cukup" pada terminal
 *    - Jika nilai lebih dari atau sama dengan 50 dan kurang dari 60 maka akan muncul tulisan "Kurang" pada terminal
 *    - Jika nilai kurang dari 50 maka akan muncul tulisan "Sangat Kurang" pada terminal (else)
 * 3. Lalu setelah dimasukkan ke variabel total. Cobalah buat hasil sisa bagi dengan variabel c
 *    pada variabel total tersebut.
 * 4. Tampilkan value total yang sekarang pada terminal
 */

var nilai = 85;
var c = 80;
var total = "";

if (nilai > 85 ) {
    total = "Sangat Bagus";
}
else if(nilai > 70 && nilai < 80) {
    total = "Bagus";
}else if(nilai > 60 && nilai < 70) {
    total = "Cukup";
}else if(nilai > 50 && nilai < 60) {
    total = "Kurang";
}else {
    total = "Sangat Kurang";
}
total = c % nilai;

console.log(total);


