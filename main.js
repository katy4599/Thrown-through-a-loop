function square(size) {
    const char = '*';
    for (let i = 0; i <= size; i += 1) {
        let output = ' ';

        if (i == 0 || i == size) {
            console.log(char.repeat(size));
        } else {
            console.log(char + '\t' + char);
        } 
    }
}
async function main () {
    square(9);
}

main();