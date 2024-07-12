function solution(s){
    var answer = true;
    const pExp = /p/gi
    const rExp = /y/gi
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.

    return s.match(pExp)?.length === s.match(rExp)?.length;
}