function solve(...args) {
    let sorted = args.sort((a, b) => b - a);

    console.log(sorted.join('\n'));
}

solve(2, 1, 3);
// 3
// 2
// 1

// solve(-2, 1, 3);
// // 3
// // 1
// // -2

// solve(0, 0, 2);
// // 2
// // 0
// // 0
