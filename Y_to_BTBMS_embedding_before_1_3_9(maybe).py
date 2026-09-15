y = list(map(int, input().split(",")))

why_mountain = [[1]]
parent = [[]]
print("()",end="")
for i in range(1,len(y)):
    print("(",end="")
    why_mountain.append([y[i]])
    parent.append([])
    current = y[i]
    r = 0
    atoms = []
    while current > 1:
        p = i
        while len(why_mountain[p]) > r and why_mountain[p][r] >= current:
            if r == 0:
                p -= 1
            else:
                p = parent[p][r-1]
        if len(why_mountain[p]) <= r :
            break
        parent[i].append(p)
        current -= why_mountain[p][r]
        why_mountain[i].append(current)
        c = p
        while(len(parent[c]) > r):
            c = parent[c][r]
        atoms.append((p,c))
        r += 1
    for j in range(len(atoms)):
        if j < len(atoms)-1 and atoms[j][0] == atoms[j+1][0]:
            continue
        if(atoms[j][0] == atoms[j][1]):
            print(atoms[j][0]+1,"^(",i+1,",",i+1,")",sep="",end="")
        else:
            print(atoms[j][0]+1,"^(",i+1,",",atoms[j][1]+1,")",sep="",end="")
        if j < len(atoms)-1:
            print(",", end="")
    if current > 1:
        p = i
        while why_mountain[p][r] >= current:
            p = parent[p][r-1]
            if len(why_mountain[p]) <= r:
                r -= 1
        print(",",p+1,sep="",end="")
        
    print(")",end="")
