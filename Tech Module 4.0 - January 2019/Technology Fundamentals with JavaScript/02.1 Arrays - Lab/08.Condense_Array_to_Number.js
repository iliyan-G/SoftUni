function solve(input) {    
    let array = input;

    while (array.length > 1) {
        let condensed = [];
        let count = array.length - 1;

        for (let i = 0; i < count; i++) {
            condensed[i] = array[i] + array[i + 1];
        }

        array = condensed;
    }

    console.log(array[0]);
}

solve([2, 10, 3]); // 25
solve([5, 0, 4, 1, 2]); // 35
solve([1]); // 1