function recursion(i) {
    if (i > 0);
    console.log(i)
    recursion(i + 1);
}

async function main () {
    recursion(0);
}

main();