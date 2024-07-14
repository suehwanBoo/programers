function throughpass(arr, idx) {
    let result = idx + 2;
    while(result >= arr.length){
        result -= arr.length
    }
    return result
}

function solution(numbers, k) {
    var answer = 0;
    for(let i = 0; i < k - 1; i++){
        answer = throughpass(numbers, answer)
    }
    return numbers[answer];
}