function solve(input) {
    console.log(input.split('').reverse().join(''));
}

// function solve(input) {
//     let reversedString = '';

//     for (let i = input.length - 1; i >= 0; i--) {
//         reversedString += input[i];
//     }

//     console.log(reversedString);
// }

solve('Hello');
// olleH

solve('SoftUni');
// inUtfoS

solve('12345');
// 54321
