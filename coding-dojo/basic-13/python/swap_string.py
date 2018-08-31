# Given an array of numbers, replace any negative values with the string Dojo

def swapString(arr):
    for x in arr:
        if x < 0:
            x = 'Dojo'
    return arr        

arr = [-1, 2, -5, 6]    
print(swapString(arr))
