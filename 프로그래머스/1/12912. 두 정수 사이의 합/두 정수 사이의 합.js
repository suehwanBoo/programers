function solution(a, b) {
    var answer = 0
    Array.from({ length : Math.abs(b - a) + 1}).forEach((_,idx) => {answer+= Math.min(a,b) + idx })
    return answer;
}