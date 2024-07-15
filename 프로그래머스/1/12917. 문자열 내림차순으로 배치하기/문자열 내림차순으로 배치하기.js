function solution(s) {
    var answer = Array.from(s).sort().reverse().join('')
    return answer;
}