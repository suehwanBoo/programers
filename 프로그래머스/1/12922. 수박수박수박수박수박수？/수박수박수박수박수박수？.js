function solution(n) {
    var answer = Array.from({length: n },(_,id)=>
        id % 2 ? "박" : "수"
    ).join('');
    
    return answer;
}