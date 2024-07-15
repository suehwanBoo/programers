function solution(price, money, count) {
    let cntList = Array.from({length : count} , (_,idx)=>  price * (idx + 1))
    let answer = cntList.reduce((t,c)=>  t + c, 0) - money
    
    return answer < 0 ? 0 : answer;
}