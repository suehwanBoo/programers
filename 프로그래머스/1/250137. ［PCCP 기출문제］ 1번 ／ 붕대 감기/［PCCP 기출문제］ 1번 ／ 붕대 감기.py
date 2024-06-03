def solution(bandage, health, attacks):
    MAX_HEALTH = health
    TIME = bandage[0]
    TIME_HEAL = bandage[1]
    COUNT_HEAL = bandage[2]
    def heal(now, total):
        now += total
        if now > MAX_HEALTH:
            return MAX_HEALTH
        else:
            return now
    for i in range(len(attacks) - 1):
        count = attacks[i+1][0] - attacks[i][0] - 1
        health -= attacks[i][1]
        if health <= 0:
            return -1
        if count > 0:
            persist = count // TIME
            total = count * TIME_HEAL + persist * COUNT_HEAL
            health = heal(health,total)
    health -= attacks[len(attacks)-1][1]
    if health > 0:
        return health
    else:
        return -1
    