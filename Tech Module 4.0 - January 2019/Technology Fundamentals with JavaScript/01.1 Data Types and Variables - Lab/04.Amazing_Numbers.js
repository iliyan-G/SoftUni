function solve(input) {
    let nums = input.toString();
    let sum = 0;

    for (let num of nums) {
        sum += Number(num);
    }

    let result = sum.toString().includes('9');

    if (result) {
        console.log(`${nums} Amazing? True`);
    } else {
        console.log(`${nums} Amazing? False`);
    }
}

solve(1233);
// 1233 Amazing? True

solve(999);
// 999 Amazing? False