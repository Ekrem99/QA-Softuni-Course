function solve(firstO, secondO, operation)
{
    `use strict`;

    let result = 0;

    switch(operation)
    {
        case '+':
            result = firstO + secondO;
            break;
        case '-':
            result = firstO - secondO;
            break;
        case '*':
            result = firstO * secondO;
            break;
        case '/':
            result = firstO / secondO;
            break;
        case '%':
            result = firstO % secondO;
            break;
        case '**':
            result = firstO ** secondO;
            break;
        default: 
            console.log('Error!');
            break;
        
    }
    console.log(result);
}