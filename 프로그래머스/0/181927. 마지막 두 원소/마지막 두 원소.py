def solution(num_list):
    NUM_lENGTH = len(num_list)
    in_num = 0
    if num_list[NUM_lENGTH-1] > num_list[NUM_lENGTH-2]:
        in_num = num_list[NUM_lENGTH-1] - num_list[NUM_lENGTH-2]
    else:
        in_num = num_list[NUM_lENGTH-1] *2
    answer = num_list + [in_num]
    return answer