function solution(s){
    const stack = []
    for(let i of s){
        if(i === "(") stack.push(i)
        else {
            if(stack.length) {
                const x = stack.pop()
                if(x === ")") return false;
            } else {
                return false
            }
        }
    }
    return stack.length ===0;
}