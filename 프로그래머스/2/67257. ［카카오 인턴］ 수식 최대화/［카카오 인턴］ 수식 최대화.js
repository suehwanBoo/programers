function existCalcList (expression) {
    return [...new Set(expression.match(/[*+-]/g))];
}

function combineList (calcList, totalCombine, result) {
    if(totalCombine.length === calcList.length) {
        result.add(totalCombine)
    }
    for (let i = 0; i < calcList.length; i++){
        if(totalCombine.indexOf(calcList[i]) === -1){
            let nextCombine = totalCombine + calcList[i]
            combineList(calcList, nextCombine, result)
        }
    }
    }

function makeNumber(order, expression) {
    let tempExpression = [...expression]
    Array.from(order).forEach( calc => {
        let indexList = []
        let calcNow = false
        for(let i = 0; i < tempExpression.length; i++){
            if(tempExpression[i] === calc) {
                calcNow = true
            } else {
                if(calcNow){
                    let num1 = indexList.pop()
                    const result = eval(num1 + calc + tempExpression[i])
                    indexList.push(result)
                    calcNow = false
                } else {
                    indexList.push(tempExpression[i])
                }
            }
        }
        tempExpression = [...indexList]
    })
    return +tempExpression[0]
}

function solution(expression) {
    let calcList = existCalcList(expression)
    const combined = new Set()
    combineList(calcList, "", combined)
    const combineResult = [...combined]
    let tempNum = "";
    let expressionList = []
    for(let i = 0; i<expression.length; i++){
        if(!isNaN(+expression[i])) {
            tempNum += expression[i]
        } else {
            expressionList.push(tempNum)
            expressionList.push(expression[i])
            tempNum = ''
        }
    }
    expressionList.push(tempNum)
    const resultList = combineResult.map(order =>  Math.abs(makeNumber(order,expressionList)))
    return Math.max(...resultList);
}