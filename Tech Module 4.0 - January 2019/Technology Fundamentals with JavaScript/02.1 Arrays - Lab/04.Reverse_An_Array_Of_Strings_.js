function solve(input) {
    let reversed = input.reverse();

    console.log(reversed.join(' '));
}

solve(['a', 'b', 'c', 'd', 'e']); // e d c b a 
solve(['abc', 'def', 'hig', 'klm', 'nop']); // nop klm hig def abc
solve(['33', '123', '0', 'dd']); // dd 0 123 33