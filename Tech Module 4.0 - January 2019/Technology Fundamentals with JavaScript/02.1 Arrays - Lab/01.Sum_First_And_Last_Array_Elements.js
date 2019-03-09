function solve(input) {
    let first = Number(input.shift());
    let second = Number(input.pop());

    console.log(first + second);
}

solve(['20', '30', '40']); // 60
solve(['10', '17', '22', '33']); // 43
solve(['11', '58', '69']); // 80