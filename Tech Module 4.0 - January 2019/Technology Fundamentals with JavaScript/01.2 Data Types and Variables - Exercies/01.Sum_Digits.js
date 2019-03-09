function solve(nums) {
    let result = nums.toString().split('');
    result = result.map(Number).reduce((a, b) => a + b, 0);

    console.log(result);
}

solve(245678); // 32
solve(97561); // 28
solve(543); // 12