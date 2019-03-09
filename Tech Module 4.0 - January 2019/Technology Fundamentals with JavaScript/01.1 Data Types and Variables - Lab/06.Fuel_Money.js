function solve(distance, passengers, price) {
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    
    let money = neededFuel * price;

    console.log(`Needed money for that trip is ${money}lv.`);
}

solve(260, 9, 2.49);
// Needed money for that trip is 47.559lv.

// solve(90, 14, 2.88);
// // Needed money for that trip is 22.176lv.