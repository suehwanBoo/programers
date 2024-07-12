function solution(phone_number) {
    const newNum = Array.from(phone_number)
    var answer = newNum.map((num,idx) => {
        if(idx < newNum.length - 4) return "*"
        else return num
    }).join('')
    return answer;
}