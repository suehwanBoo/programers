function solution(my_string) {
    var answer = Array.from({length : 52}, ()=>0);
    Array.from(my_string).forEach(elem => {
        const idx = elem.charCodeAt()
        idx < 97? answer[idx - 65] += 1 : answer [idx - 71] += 1
    })
    return answer;
}