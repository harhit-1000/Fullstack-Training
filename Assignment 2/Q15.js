function myPow(x, n) {
    if (n === 0) return 1;

    let result = 1;

    while (n > 0) {
        if (n % 2 === 1) {
            result *= x;
        }
        x *= x;
        n = Math.floor(n / 2);
    }

    return result;
}


console.log(myPow(2, 10));   
console.log(myPow(3, 10)); 