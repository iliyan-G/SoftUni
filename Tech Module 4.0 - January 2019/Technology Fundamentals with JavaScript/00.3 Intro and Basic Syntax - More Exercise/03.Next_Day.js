function solve(year, manth, day) {
    let date = new Date(year, manth - 1, day);
    let nextDate = new Date(year, manth - 1, date.getDate() + 1);

    console.log(`${nextDate.getFullYear()}-${nextDate.getMonth() + 1}-${nextDate.getDate()}`);
}

solve(2016, 9, 30);
// 2016-10-1
