const PIRODO = {
    0 : {
        "diamond" : 1,
        "iron" : 1,
        "stone" : 1
    },
    1 : {
        "diamond" : 5,
        "iron" : 1,
        "stone" : 1
    },
    2 : {
        "diamond" : 25,
        "iron" : 5,
        "stone" : 1
    }
}

let minValue = Number.MAX_VALUE;

function findMin(picks, minerals, piro) {
    if((!picks[0] && !picks[1] && !picks[2]) || !minerals.length){
        console.log(piro)
        if(minValue > piro) minValue = piro
    } else {
        for(let i = 0; i < 3 ; i++){
            if(picks[i]) {
                const mineral = []
                const repeat = minerals.length > 5 ? 5 : minerals.length
                for( let j = 0; j< repeat; j++){
                    const item = minerals.shift()
                    mineral.push(item)
                    piro += PIRODO[i][item]
                }
                picks[i] -= 1;
                findMin(picks, minerals, piro)
                for(let j = 0; j< repeat; j++){
                    piro -= PIRODO[i][mineral[j]]
                    minerals.unshift(mineral[j])
                }
                picks[i] += 1;
            } 
        }
    }
}

function solution(picks, minerals) {
    findMin(picks, minerals, 0)
    return minValue;
}