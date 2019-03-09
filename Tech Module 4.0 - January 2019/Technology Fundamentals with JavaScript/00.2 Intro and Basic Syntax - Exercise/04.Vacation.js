function solve(count, typePerson, dayOfWeek) {
    let countMember = 0;

    switch (dayOfWeek) {
        case 'Friday':
            if (typePerson === 'Students') {
                countMember = count * 8.45;
            } else if (typePerson === 'Business') {
                countMember = count * 10.90;
            } else if (typePerson === 'Regular') {
                countMember = count * 15.00;
            }
            break;
        case 'Saturday':
            if (typePerson === 'Students') {
                countMember = count * 9.80;
            } else if (typePerson === 'Business') {
                countMember = count * 15.60;
            } else if (typePerson === 'Regular') {
                countMember = count * 20.00;
            }
            break;
        case 'Sunday':
            if (typePerson === 'Students') {
                countMember = count * 10.46;
            } else if (typePerson === 'Business') {
                countMember = count * 16.00;
            } else if (typePerson === 'Regular') {
                countMember = count * 22.50;
            }
            break;
    }

    if (typePerson === 'Students' && count >= 30) {
        countMember = countMember * 0.85;
    } else if (typePerson === 'Business' && count >= 100) {
        countMember = countMember / 10;
    } else if (typePerson === 'Regular') {
        if (count >= 10 && count <= 20) {
            countMember = countMember * 0.95;
        }
    }

    console.log(`Total price: ${countMember.toFixed(2)}`);
}

solve(30, "Students", "Sunday");
// Total price: 266.73

solve(40, "Regular", "Saturday");
// Total price: 800.00

solve(110, "Business", "Saturday");
// Total price: 800.00