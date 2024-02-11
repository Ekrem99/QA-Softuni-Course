function solve(startNumber, endNumber){
    'use strict';

    let message = '';
    let sum = 0;

    for (let i = startNumber; i <= endNumber; i += 1){
        sum += i;
        message += `${i} `
    }
    console.log(message.trimEnd());
    console.log(`Sum: ${sum}`)
}

solve(5,10);
solve(0, 26);
solve(50, 60);
