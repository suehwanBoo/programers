function solution(a, b) {
    return a.reduce((t,_,idx)=>{
        return t + (a[idx] * b[idx])
    },0);
}