/*
    1. Cobalah untuk membuat sebuah function untuk menghitung Luas Permukaan sebuah balok (nama function bebas)
    2. function tersebut menerima 3 parameter yaitu: panjang, lebar, tinggi
    3. Rumus luas permukaan balok: 2 x ((panjang x tinggi) + (panjang x lebar) + (lebar x tinggi))
    4. Kamu dapat mencari luas permukaan balok di internet agar lebih jelas
    5. Setelah selesai melakukan kalkulasi maka kembalikan value tersebut dengan return pada function
    6. Terakhir, Panggil Function tersebut lalu tampilkan hasilnya pada terminal (bisa di setor ke variabel atau langsung)
*/
function LuasPermukaanBalok(panjang, lebar, tinggi) {
    // Rumus luas permukaan balok
    var luasPermukaan = 2 * ((panjang * tinggi) + (panjang * lebar) + (lebar * tinggi));
    
    return luasPermukaan;
  }
  
  // luas balok yang di ketahui
  var panjang = 5;
  var lebar = 3;
  var tinggi = 2;
  
  var hasilLuasPermukaan = LuasPermukaanBalok(panjang, lebar, tinggi);
  
 
  console.log("Luas Permukaan Balok dengan panjang", panjang + ", lebar", lebar + ", dan tinggi", tinggi + " adalah:", hasilLuasPermukaan);