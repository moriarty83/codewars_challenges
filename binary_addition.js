function addBinary(a,b) {
    let baseTenSum = a + b;
    const binarySum = [];

    while (baseTenSum >= 1)
    {
        binarySum.unshift(baseTenSum%2)
        baseTenSum = Math.floor(baseTenSum / 2);
    }
    return binarySum.join('');
}