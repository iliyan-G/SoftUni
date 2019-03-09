function solve(...nums) {
    let result = nums.reduce((a, b) => a + b);

    if (result % 1 === 0) {
        console.log(`${result} - Integer`);
    } else {
        console.log(`${result} - Float`);
    }
}

solve(9, 100, 1.1);
// 110.1 - Float

solve(100, 200, 303);
// 603 - Integer
