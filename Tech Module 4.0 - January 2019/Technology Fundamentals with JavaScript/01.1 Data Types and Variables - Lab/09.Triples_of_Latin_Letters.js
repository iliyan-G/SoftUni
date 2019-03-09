function solve(num) {
    for (let i = 0; i < num; i++) {
        let letter1 = String.fromCharCode(97 + i);
        
        for (let k = 0; k < num; k++) {
            letter2 = String.fromCharCode(97 + k);

            for (let j = 0; j < num; j++) {
                letter3 = String.fromCharCode(97 + j);
                
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }
}

solve(3);
// aaa
// aab
// aac
// aba
// abb
// abc
// aca
// acb
// acc
// baa
// bab
// bac
// bba
// bbb
// bbc
// bca
// bcb
// bcc
// caa
// cab
// cac
// cba
// cbb
// cbc
// cca
// ccb
// ccc
