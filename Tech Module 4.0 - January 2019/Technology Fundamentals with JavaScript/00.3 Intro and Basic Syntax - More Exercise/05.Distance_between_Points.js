function solve(x1, y1, x2, y2) {
    let coordinateX = (x2 - x1) ** 2;
    let coordinateY = (y2 - y1) ** 2;
    let distace = Math.sqrt(coordinateX + coordinateY);

    console.log(distace);
}

// solve(2, 4, 5, 0);
// // 5

solve(2.34, 15.66, -13.55, -2.9985);
// 24.50778901186315

// https://www.mathplanet.com/education/algebra-2/conic-sections/distance-between-two-points-and-the-midpoint