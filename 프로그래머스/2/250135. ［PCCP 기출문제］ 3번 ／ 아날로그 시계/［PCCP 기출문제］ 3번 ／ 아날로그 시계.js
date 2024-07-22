const meter = 60 * 720;
const sGo = 1 * 720;
const mGo = (1 / 60) * 720 ;
const hGo = (1 / 720) * 720 ;

function findStart(h,m,s) {
    if( h >= 12 ) h -= 12;
    let totalSec = s + (m * 60) + (h * 3600)
    return {
        hNow : hGo * totalSec % meter,
        mNow : mGo * totalSec % meter,
        sNow : sGo * totalSec % meter
    }
}

function solution(h1, m1, s1, h2, m2, s2) {
    let {hNow, mNow, sNow} = findStart(h1,m1,s1)
    var answer = hNow === sNow || mNow === sNow ? 1 : 0;
    let nowSec = s1 + (m1 * 60) + (h1 * 3600)
    let nextSec = s2 + (m2 * 60) + (h2 * 3600)
    console.log(hNow, mNow, sNow)
    for(let i = 0; i < nextSec - nowSec; i++ ){
        let flag = false;
        if(sNow < hNow && sNow + sGo >= hNow + hGo) answer += 1
        if(sNow < mNow && sNow + sGo >= mNow + mGo) answer += 1
        if(sNow + sGo === hNow + hGo && hNow + hGo === mNow + mGo) answer -=1
        sNow += sGo;
        mNow += mGo;
        hNow += hGo;
        sNow %= meter;
        mNow %= meter;
        hNow %= meter;
    }
    return answer;
}