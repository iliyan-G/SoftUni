function solve(str1, char, str2) {
    let firstStr = str1.replace('_', char);

    if (firstStr === str2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

solve('Str_ng', 'I', 'Strong');
// Not Matched

solve('Str_ng', 'i', 'String');
// Matched
