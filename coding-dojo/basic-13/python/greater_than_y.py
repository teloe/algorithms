# Given an array and a value Y, count and print the number of array values greater than Y

def greaterThanY(arr, Y):
    count= 0
    for x in arr:
        if x > Y:
            count += 1
    return count        

Y = 2
arr = [5, 2, 3, 16]
print(greaterThanY(arr, Y))
