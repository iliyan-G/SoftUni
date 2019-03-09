function solve(num) {
    let result = '';

    for (let i = 1; i <= num; i++) {
        result = ``;

        for (let k = 1; k <= i; k++) {
            result += `${i} `;
        }

        console.log(result.trim());
    }
}

solve(3);
// 1
// 2 2 
// 3 3 3

solve(5);
// 1
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

solve(6);
// 1
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5
// 6 6 6 6 6 6
