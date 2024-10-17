function solution(A,B){
    let newA = A.sort((a,b)=>a-b)
    let newB = B.sort((a,b)=>b-a)
    let idx = 0;
    let result = 0
    while(idx < newA.length && idx<newB.length) {
        result += newA[idx] * newB[idx]
        idx+=1
    }
    return result;
}