function solve(n, inputArr) {
    let arr = [];
    let output = '';

    for (let i = 0; i < n; i ++) {
        let getEl = inputArr.shift();
        arr.push(getEl);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        output += arr[i] + ' ';
    }

    console.log(output);
}

solve(3, [10, 20, 30, 40, 50]); // 30 20 10
// solve(4, [-1, 20, 99, 5]); // 5 99 20 -1
// solve(2, [66, 43, 75, 89, 47]); // 43 66