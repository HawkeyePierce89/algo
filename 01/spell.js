const spells = require('./spells.json');

const spell = spells[process.argv[2]];

for (let y = 0; y < 25; y++) {
    let line = '';
    for (let x = 0; x < 25; x++) {
        line += eval(spell) ? '#' : '.';
    }
    console.log(line);
}
