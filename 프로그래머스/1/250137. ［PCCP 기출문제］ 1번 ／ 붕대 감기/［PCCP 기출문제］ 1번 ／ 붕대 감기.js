
function solution(bandage, health, attacks) {
    const[sec, perHeal, bonus] = bandage
    const MAX_HEALTH = health
    let prevTime = 0;
    for (let i = 0; i< attacks.length; i++){
        const [time, damage] = attacks[i];
        const lastTime = time - 1 - prevTime;
        let totalHeal = (lastTime * perHeal) + ( Math.floor(lastTime / sec) * bonus ) ;
        health = health + totalHeal > MAX_HEALTH ? MAX_HEALTH : health + totalHeal
        health -= damage
        prevTime = time;
        if(health <= 0) return -1
    }
         

    return health;
}