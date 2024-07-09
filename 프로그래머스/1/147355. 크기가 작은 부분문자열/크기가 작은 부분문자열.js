function solution(t, p) {
    var answer = 0;
    
    for(let i = 0; i <= t.length - p.length; i++){
        const num = t.slice(i,i + p.length)
        parseInt(p) >= parseInt(num) ? answer+=1 : null
    }
    return answer;
}