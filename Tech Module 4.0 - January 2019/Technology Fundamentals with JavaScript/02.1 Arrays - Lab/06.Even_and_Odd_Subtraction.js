function solve(input) {
    let sumEven = 0;
    let sumOdd = 0;
    let result = 0;

    for (let num of input) {
        if(num % 2 === 0) {
            sumEven += Number(num);
        }

        if(num % 2 !== 0) {
            sumOdd += Number(num);
        }
    }

    result = sumEven - sumOdd;

    console.log(result);
}

solve([1, 2, 3, 4, 5, 6]); // 3
solve([3, 5, 7, 9]); // -24
solve([2, 4, 6, 8, 10]); // 30