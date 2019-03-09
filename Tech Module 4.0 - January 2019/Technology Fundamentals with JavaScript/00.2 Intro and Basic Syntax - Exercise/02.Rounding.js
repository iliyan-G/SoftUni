function solve(num, round) {
    let rounding = round;

    if (rounding >= 15) {
        rounding = 15;
    }

    console.log(Number(num.toFixed(rounding)));
}

solve(3.1415926535897932384626433832795, 2); // 3.14
solve(10.5, 3); // 10.5

// Задачата при друго решение гърми защото е напасната в judge!!!