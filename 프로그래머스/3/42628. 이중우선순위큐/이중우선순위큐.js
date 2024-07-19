function solution(operations) {
    const ORDER = {
        "I" : (q, num)=>{q.push(num)},
        "D" : (q, num) => {
            if(q.length === 0) return;
            if(num == 1){
                let compare = 0;
                let idx = 0;
                q.forEach((elem, id) => {
                    if(compare < +elem){
                        compare = +elem;
                        idx = id
                    }
                })
                q.splice(idx,1)
            }
            else {
                let compare = 1000001;
                let idx = 0;
                q.forEach((elem, id) => {
                    if(compare > +elem){
                        compare = +elem;
                        idx = id
                    }
                })
                q.splice(idx,1)
            }
        },
    }
    const queue = []
    operations.forEach(op => {
        const [order, num] = op.split(' ')
        const func = ORDER[order]
        func(queue,num)
    })
    var answer = queue.length? [Math.max(...queue), Math.min(...queue)]: [0,0];
    return answer;
}