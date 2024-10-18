function countOne(str) {
    let cnt = 0
    for(let word of str) {
        if(word === "1") cnt+=1
    }
    return cnt;
}

function solution(n) {
    let nOne = countOne(n.toString(2))
    while(true) {
        n+=1;
        if(countOne(n.toString(2)) === nOne) return n;
    }
}