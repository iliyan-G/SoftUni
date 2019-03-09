function solve(nums) {
    for (let i = 1; i <= nums; i++) {
        let lastDigit = i % 10;
        let middleDigit = (i / 10) % 10;
        let firstDigit = middleDigit / 10;

        let sum = parseInt(lastDigit + middleDigit + firstDigit);

        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`);
        } else {
            console.log(`${i} -> False`);
        }
    }
}

solve(15);
// 1 -> False
// 2 -> False
// 3 -> False
// 4 -> False
// 5 -> True
// 6 -> False
// 7 -> True
// 8 -> False
// 9 -> False
// 10 -> False
// 11 -> False
// 12 -> False
// 13 -> False
// 14 -> True
// 15 -> False
