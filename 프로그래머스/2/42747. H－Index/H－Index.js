
function solution(citations) {
    let maxResult = citations.length;
    while(maxResult >= 0){
        let cnt = 0;
        for(let i = 0; i<citations.length; i++){
            if(citations[i] >= maxResult){
                cnt += 1;
            }
        }
        if(cnt >= maxResult && citations.length - cnt <= maxResult){
            return maxResult;
        } else {
            maxResult -= 1
        }
    }
}