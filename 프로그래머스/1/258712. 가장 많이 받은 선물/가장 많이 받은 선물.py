def solution(friends, gifts):
    giftBox = [ [0 for i in range(len(friends))] for i in range(len(friends))]
    result = [0 for i in range(len(friends))]
    
    for gift in gifts:
        give, gave = gift.split(" ")
        giveIdx = friends.index(give)
        gaveIdx = friends.index(gave)
        giftBox[giveIdx][gaveIdx] += 1
        giftBox[giveIdx][giveIdx] += 1
        giftBox[gaveIdx][gaveIdx] -= 1
    for i in range(len(friends)):
        for j in range(i,len(friends)):
            if i == j:
                continue
            else:
                if giftBox[i][j] > giftBox[j][i]:
                    result[i] += 1
                elif giftBox[j][i] > giftBox[i][j]:
                    result[j] += 1
                else:
                    if giftBox[i][i] > giftBox[j][j]:
                        result[i] += 1
                    elif giftBox[j][j] > giftBox[i][i]:
                        result[j] += 1
    answer = max(result)
    return answer