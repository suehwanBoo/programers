function findMin(min, max) {
    let cnt = 0;
    for(let i = max - min; i <= max; i++){
        cnt += i + min > max ? 1 : 0
    }
    return cnt
}

function findMax(min, max) {
    let cnt = 0;
    for(let i = max + 1; i < min + max; i++){
        cnt += 1
    }
    return cnt
}

function solution(sides) {
    const [min, max] = [Math.min(...sides), Math.max(...sides)]
    return findMin(min, max) + findMax(min, max);
}

