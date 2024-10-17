function solution(s) {
    var answer = [0,0];
    while(s !== "1") {
        for(let i = 0; i<s.length; i ++){
            answer[1] += s[i] === "0" ? 1 : 0;
        }
        s = s.replaceAll("0","").length.toString(2)
        answer[0] += 1;
    }
    return answer;
}