from collections import deque

def solution(maps):
    answer = 0
    def findStart():
        for i in range(len(maps)):
            flag = 0
            for j in range(len(maps[i])):
                if maps[i][j] == "S":
                    return (i,j)
    def pullL(x,y):
        queue = deque()
        queue.appendleft((x,y,0))
        checkList = [[ 0 for i in range(len(maps[0]))] for i in range(len(maps))]
        checkList[x][y] = 1
        while queue:
            startx,starty,cnt = queue.popleft()
            if maps[startx][starty] == "L":
                return (cnt,startx,starty)
            for i,j in [[0,1],[1,0],[-1,0],[0,-1]]:
                newx,newy = startx + i, starty+ j
                if 0<=newx<len(maps) and 0<=newy<len(maps[newx]) and maps[newx][newy] != "X" and checkList[newx][newy] == 0:
                    checkList[newx][newy] = 1
                    queue.append((newx,newy,cnt+1))
        return (-1,x,y)
    def goExit(x,y):
        queue = deque()
        queue.appendleft((x,y,0))
        checkList = [[ 0 for i in range(len(maps[0]))] for i in range(len(maps))]
        checkList[x][y] = 1
        while queue:
            startx,starty,cnt = queue.popleft()
            if maps[startx][starty] == 'E':
                return (cnt,startx,starty)
            for i,j in [[0,1],[1,0],[-1,0],[0,-1]]:
                newx,newy = startx + i, starty+ j
                if 0<=newx<len(maps) and 0<=newy<len(maps[newx]) and maps[newx][newy] != "X" and checkList[newx][newy] == 0:
                    checkList[newx][newy] = 1
                    queue.append((newx,newy,cnt+1))
        return (-1,x,y)
    x,y = findStart()
    scnt,sx,sy = pullL(x,y)
    if(scnt == -1):
        return -1
    dcnt,ex,ey = goExit(sx,sy)
    if(dcnt == -1):
        return -1
    return scnt + dcnt

