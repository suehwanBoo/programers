function solution(brown, yellow) {
    var answer = [];
    for(let i = 1; i <= yellow; i++) {
        if(yellow % i !== 0) continue;
        const p = yellow / i + 2;
        const q = i + 2;
        const square = p * q;
        if(square - yellow === brown) {
            return [Math.max(p,q), Math.min(p,q)];
        }
    }
    return -1;
}