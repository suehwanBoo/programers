function isPlus(elem){
    let cnt = 0;
    for(let i = 0; i <= elem; i++){
        cnt += elem % i ? 0 : 1
    }
    return cnt % 2 ? true : false
}

function solution(left, right) {
    let numList = Array.from({ length: right - left + 1}, (_,idx)=> left + idx)
    return numList.reduce((t,c)=>{
        return  isPlus(c) ? t + c : t - c
    },0)
}