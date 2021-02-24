var readline = require('readline')
var fs = require('fs')

var rl2 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
rl2.question('Masukkan Nama Warung: ', (warung) => {
  rl2.question('Masukkan Tanggal: ', (tanggal) => {
    rl2.question('Masukkan Nama Kasir: ', (kasir) => {
      rl2.question('Masukkan Nama Makanan: ', (menu) => {
        rl2.question('Masukkan harga Makanan: ', (harga) => {
          console.log('\n');
          console.log(`    ${warung}`);
          console.log('Tanggal:     '+tanggal);
          console.log('Nama Kasir:    '+kasir);
          console.log('=======================');
          console.log(`${menu}.............${harga}\n`);
          rl2.close();
        })
      })
    })
  })
})
