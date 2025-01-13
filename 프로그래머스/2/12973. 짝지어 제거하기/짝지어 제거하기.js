function solution(s)
{
    const stack = [];
    for(let char of s) {
        if(stack.length === 0) stack.push(char);
        else {
            const prev = stack.pop();
            if(prev !== char) {
                stack.push(prev);
                stack.push(char);
            }
        }
    }
    return stack.length === 0 ? 1 : 0;


}