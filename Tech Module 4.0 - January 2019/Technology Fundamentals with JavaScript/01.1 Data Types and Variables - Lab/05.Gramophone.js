function solve(band, album, song) {
    let time = (album.length * band.length) * song.length / 2;
    let rotations = Math.ceil(time / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
}

solve('Black Sabbath', 'Paranoid', 'War Pigs');
// The plate was rotated 167 times.