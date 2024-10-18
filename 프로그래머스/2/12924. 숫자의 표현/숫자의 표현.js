function solution(n) {
    let result = 1;
    for(let i = 1; i<n; i++){
        let sum = i;
        for(let j = i+1; j<n; j++){
            sum += j;
            if(sum === n){
                result += 1
                break;
            } else if(sum > n) break;
        }
    }
    return result;
}