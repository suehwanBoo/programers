const calc = {
    "+" : (a,b) => {return a + b},
    "-" : (a,b) => {return a - b}
}

function solution(my_string) {
    let order = ''
    const my_Arr = my_string.split(' ')
    let result = 0
    my_Arr.forEach((elem, id) => {
        if(id === 0) {result = +elem}
        else {
            if(+elem) {
                const calcuration = calc[order]
                result = calcuration(result, +elem)
            }
            else{
                order = elem
            }
        }
    
    })
    return result;
}