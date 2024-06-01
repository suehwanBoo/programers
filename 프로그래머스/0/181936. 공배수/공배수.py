def solution(number, n, m):
    answer = number % n == 0 and number % m == 0
    return int(answer)