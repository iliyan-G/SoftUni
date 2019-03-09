// * 09. The Pyramid of King Djoser

function solve(base, increment) {
    // Pyramid resurse
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;

    let pyramidHeight = 1;

    while (true) {
        if (base === 1 || base === 2) {
            // Add gold
            gold = (base * base) * increment;

            break;
        }

        // Calculate stone
        stone += ((base - 2) * (base - 2)) * increment;

        // Calculate Marble and Lapis for evry 5 step
        if (pyramidHeight % 5 === 0) {
            lapis += ((base * base) - ((base - 2) * (base - 2))) * increment;
        } else {
            marble += ((base * base) - ((base - 2) * (base - 2))) * increment;
        }

        base -= 2;
        pyramidHeight++;
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight * increment)}`);
}

// solve(11, 1);
// // Stone required: 165
// // Marble required: 112
// // Lapis Lazuli required: 8
// // Gold required: 1
// // Final pyramid height: 6

// solve(11, 0.75);
// // Stone required: 124
// // Marble required: 84
// // Lapis Lazuli required: 6
// // Gold required: 1
// // Final pyramid height: 4

// solve(12, 1);
// // Stone required: 220
// // Marble required: 128
// // Lapis Lazuli required: 12
// // Gold required: 4
// // Final pyramid height: 6

solve(23, 0.5);
// Stone required: 886
// Marble required: 228
// Lapis Lazuli required: 36
// Gold required: 1
// Final pyramid height: 6
