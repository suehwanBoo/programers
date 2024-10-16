function solution(name, yearning, photo) {
    const missPoint = {}
    var answer = [];
    name.forEach((name,idx) => missPoint[name] = yearning[idx])
    answer = photo.map((pArr)=>{
        let sum = 0
        pArr.forEach(name => {
            let point = missPoint[name]
            sum += point ?? 0
        })
        return sum
    })
    return answer;
}