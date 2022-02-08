const shopping = [
    'Apples',
    'Bananas',
    'Pickles',
    'Marshmallows',
];

async function main () {
    console.log('Here is your shopping list:');
    console.log('============================');
    for (food of shopping) {
        console.log(' = ', food);
    }
}

main();