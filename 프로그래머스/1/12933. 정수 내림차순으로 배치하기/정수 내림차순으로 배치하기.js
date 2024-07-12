function solution(n) {
    var answer = +Array.from(""+n, (i)=> +i).sort((a,b) => b - a).join('')
    return answer;
}