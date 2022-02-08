function recursion(i) {
    for (let i = 0; i <= Infinity; i += 1) {
        console.log(i);
    }
}

async function main () {
    recursion(0);
}

main();