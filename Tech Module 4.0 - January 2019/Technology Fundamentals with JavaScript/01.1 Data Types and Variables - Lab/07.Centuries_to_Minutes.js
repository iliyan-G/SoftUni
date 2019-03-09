function solve(centuries) {
    let years = centuries * 100;
    let days = Math.trunc(years * 365.2422);
    let hours = 24 * days;
    let minutes = 60 * hours;

    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);
}

solve(1);
// 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes

solve(5);
// 5 centuries = 500 years = 182621 days = 4382904 hours = 262974240 minutes