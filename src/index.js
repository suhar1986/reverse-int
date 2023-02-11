module.exports = function reverse (n) {
    if (n < 0) {n = Math.abs(n)};
    const nStr = n.toString(); 
    const resultArr = [];
    resultArr.push(nStr[2] + nStr[1] + nStr[0]);
    const resultStr = resultArr.join('');
    return Number(resultStr);
    
}
/* another soluthion after getting more knowlege )

    if (n < 0) {n = Math.abs(n)};
    return Array.from(n.toString()).reverse().join(''); */
