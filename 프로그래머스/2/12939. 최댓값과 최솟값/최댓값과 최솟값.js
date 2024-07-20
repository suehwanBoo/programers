function solution(s) {
    const arr = s.split(' ')
    var answer = `${Math.min(...arr)} ${Math.max(...arr)}`;
    return answer;
}