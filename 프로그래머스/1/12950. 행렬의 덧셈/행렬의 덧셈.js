function solution(arr1, arr2) {
    return arr1.map((arr, i) => arr.map((_, j) => arr1[i][j] + arr2[i][j]))
}