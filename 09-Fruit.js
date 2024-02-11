function solve(typeOfFruit, weightGr, pricePerKg){
    'use strict';

    let weightKg = weightGr / 1000;
    let totalPrice = weightKg * pricePerKg;
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${typeOfFruit}.`);
}
solve('orange', 2500, 1.80)