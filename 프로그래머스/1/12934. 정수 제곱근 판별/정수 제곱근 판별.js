function solution(n) {
    let x = Math.sqrt(n);
    if((""+x).includes('.')) return - 1
    return (x+1)**2;
}