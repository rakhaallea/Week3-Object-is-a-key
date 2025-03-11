//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
    // you can only write your code here!
    const arrayKata = kata.split('');
    let result = [];

    for (let i = 0; i < arrayKata.length; i++) {
        const charCode = arrayKata[i].charCodeAt(0) + 1;
        const char = String.fromCharCode(charCode);
        result.push(char);
    }

    const str = result.join('')

    return str;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu