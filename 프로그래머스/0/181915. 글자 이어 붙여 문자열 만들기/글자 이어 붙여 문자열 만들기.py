def solution(my_string, index_list):
    answer = ''.join(list(map(lambda i : my_string[i],index_list)))
    return answer