function solve(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0 && year % 400 !== 0) {
            console.log('no');
        } else {
            console.log('yes');
        }
    } else {
        console.log('no');
    }
}

solve(1984); // yes
solve(2003); // no
solve(4); // yes

solve(2000) // yes
solve(1900) // no
