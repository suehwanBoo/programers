def solution(n, control):
    answer = n
    def make(str,num):
        result = 0
        if str == "w":
                result = num+1
        if str == "s":
                 result =num-1
        if str == "d":
                result =  num+10
        if str == "a":
                result =  num-10
        return result
    for i in control:
        answer = make(i,answer)
    return answer