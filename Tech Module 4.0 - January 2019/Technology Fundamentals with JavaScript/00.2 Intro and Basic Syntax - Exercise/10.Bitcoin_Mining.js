function solve(args) {
    let bitcoins = 0;
    let firstBitcoinDay = 0;
    let totalMoney = 0;

    for (let i = 1; i <= args.length; i++) {
        if (i % 3 !== 0) {
            totalMoney += bayBitcoins(args[i - 1] * 67.51);

            if (bitcoins > 0 && firstBitcoinDay === 0) {
                firstBitcoinDay = i;
            }

        } else {
            let drop30Percent = args[i - 1] * 0.70;

            totalMoney += bayBitcoins(drop30Percent * 67.51);

            if (bitcoins > 0 && firstBitcoinDay === 0) {
                firstBitcoinDay = i;
            }

        }

        totalMoney = bayBitcoins(totalMoney);
    }

    function bayBitcoins(countSum) {
        let temp = countSum;

        while (temp >= 11949.16) {
            temp -= 11949.16;
            bitcoins += 1;
        }

        return temp;
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    
    if (firstBitcoinDay > 0) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
    }

    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
// Bought bitcoins: 2
// Day of the first purchased bitcoin: 2
// Left money: 10531.78 lv.

// solve([50, 100]);
// // Bought bitcoins: 0
// // Money left: 10126.50 lv.

// solve([3124.15, 504.212, 2511.124]);
// // Bought bitcoins: 30
// // Day of the first purchased bitcoin: 1
// // Money left: 5144.11 lv.
