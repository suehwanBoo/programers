function solution(s) {
    var answer = '';
    for(let i = 0; i<s.length; i++){
        answer += i-1 < 0 || s[i-1] === " " ? s[i].toUpperCase() : s[i].toLowerCase()        
    }
    return answer;
}