function solution(babbling) {
    var answer = 0;
    const babbleList = ['aya', 'ye', 'woo', 'ma']
    babbling.forEach(babble => {
        let temp = babble
        for(let i = 0; i<babbleList.length; i++){
            const nextResult = temp.replace(babbleList[i], ' ')
            if(nextResult.replace(/ /g,'').length === 0){
                answer += 1;
                break;
            }
            temp = nextResult
        }
    })
    return answer;
}