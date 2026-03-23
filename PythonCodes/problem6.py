
def rect_overlap(rect1 : list,rect2:list):
    x1,y1,x2,y2 = rect1
    x3,y3,x4,y4 = rect2

    if x2<=x3 or x4<=x1:
        return False
    
    if y2<=y3 or y4<=y1:
        return False

    return True

if __name__=="__main__":
    rect1 = [0,0,2,2]
    rect2 = [1,1,3,3]

    print(rect_overlap(rect1,rect2)) 
