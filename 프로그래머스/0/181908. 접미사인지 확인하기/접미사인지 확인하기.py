def solution(my_string, is_suffix):
    answer = 0
    END_STRING = len(my_string) 
    END_SUFFIX = len(is_suffix)
    if(END_STRING >= END_SUFFIX):
        for idx in range(1, END_SUFFIX+1):
            if(my_string[END_STRING - idx] == is_suffix[END_SUFFIX - idx]):
                answer = 1
            else:
                answer= 0
                break;
    return answer