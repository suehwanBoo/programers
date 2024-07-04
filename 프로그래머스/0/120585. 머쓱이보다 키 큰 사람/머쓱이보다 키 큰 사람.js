function solution(array, height) {
    array.sort((a, b) => b - a);
    return array.filter((i)=> i > height).length;
}