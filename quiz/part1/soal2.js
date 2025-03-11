//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
    // you can only write your code here!
    if (angka2 == 0) {
        return angka1;
    } else if (angka1 == 0) {
        return angka2;
    }
    else {
        return fpb(angka2, angka1 % angka2);
    }
}

// Kalo gk ngerjain soal ini gk tau apa itu algoritma euclid wkwkwk
// Makashi bang :)

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1