function solution(arr) {
    let cnt = 0;
    while(true) {
        const changed = change(arr)
        if(isEqual(arr, changed)){
          return cnt
      } else {
          cnt += 1
          arr = changed
      }
    }
}

function change(obj){
    return obj.map((element) => {
        let result = element >= 50 && element %2 ===0  ? element / 2 : element
        result = element < 50 && element % 2 ? element * 2 + 1 : element
        return result
    })
}

function isEqual(arr1, arr2) {
    let result = true;
    arr1.forEach((_,idx) => {
        if (arr2[idx] !== arr1[idx]) result = false;
    })
    return result
}