function solve(num) {
    let endLoop = num * 2;
    let count = 1;
    let sumNum = 0;

    while (count <= endLoop) {
        if (count % 2 !== 0) {
            console.log(count);
            sumNum += count;
        }

        count++;
    }

    console.log(`Sum: ${sumNum}`);
}

solve(5);
// 1
// 3
// 5
// 7
// 9
// Sum: 25

solve(3);
// 1
// 3
// 5
// Sum: 9
