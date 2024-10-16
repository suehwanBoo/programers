function countCompress(str, len) {
    let count = 0;
    let left = 0;
    let right = left + len;
    let result = str.length;
    while (right < str.length){
       if(str[left] === str[right]) {
           count += 1;
           left += 1;
           right += 1;
       } else {
            if(count >= len) result -= Math.floor(count/len) * len - (Math.floor(count/len) + 1).toString().length;
           left =  left - (left % len) + len
           right = right - (right % len) + len
           count = 0
       }
    }
    if(count >= len) result -= Math.floor(count/len) * len - (Math.floor(count/len) + 1).toString().length;
    
    return result;
}


function solution(s) {
    var answer = 0;
    let maxDivide = Math.floor(s.length / 2)
    let minLength = s.length;
    for(let divide = 1; divide < maxDivide + 1; divide++) {
        const result = countCompress(s,divide)
        if(result < minLength) {
            minLength = result;
        }
    }
    return minLength;
}