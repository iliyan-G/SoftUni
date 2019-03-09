function solve(arr1, arr2) {
    let isEqual = true;
    let sum = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            isEqual = false;
            break;
        }
    }

    if (isEqual) {
        for (let num of arr1) {
            sum += Number(num);
        }

        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

solve(['10','20','30'], ['10','20','30']);
// Arrays are identical. Sum: 60

solve(['1','2','3','4','5'], ['1','2','4','4','5']);
// Arrays are not identical. Found difference at 2 index

solve(['1'], ['10']);
// Arrays are not identical. Found difference at 0 index