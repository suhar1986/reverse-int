module.exports = function reverse (n) {
    /* third solition = was interested how could reverse the num if its length -  more then 4 (not like in test js) */
    
    if (n < 0) {n = Math.abs(n)};
    const nStr = n.toString();
    let result = [];
    for (let i = nStr.length; i > 0; i--) {
        if (result.length != nStr.length) { result.push(nStr[((nStr.length + i) - (nStr.length + 1))]) }
        }
    return result = Number(result.join(''));
    
}
/* second solution after getting more knowlege )

    if (n < 0) {n = Math.abs(n)};
    return Array.from(n.toString()).reverse().join(''); */

// first solution 

/*   function reverse (n) {
    if (n < 0) {n = Math.abs(n)};
    const nStr = n.toString(); 
    const resultArr = [];
    resultArr.push(nStr[2], nStr[1], nStr[0]);
    const resultStr = resultArr.join('');
    return Number(resultStr);
    
}*/

