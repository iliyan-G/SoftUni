function solve(args) {
    let username = args[0];
    let password = '';
    let counterIncorect = 0;

    for (let i = 1; i < args.length; i++) {
        password = args[i].split('').reverse().join('');

        if (password === username) {
            console.log(`User ${username} logged in.`);

            break;
        } else {
            counterIncorect += 1;

            if (counterIncorect >= 4) {
                console.log(`User ${username} blocked!`);
                
                break;
            }

            console.log(`Incorrect password. Try again.`);
        }
    }
}

solve(['Acer', 'login', 'go', 'let me in', 'recA']);
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User Acer logged in.

solve(['momo','omom']);
// User momo logged in.

solve(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
// Incorrect password. Try again.
// Incorrect password. Try again.
// Incorrect password. Try again.
// User sunny blocked!
