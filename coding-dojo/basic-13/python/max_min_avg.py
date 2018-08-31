# Given an array, print the max, min and average values for that array

def maxMinAvg(arr):
    max_num = max(arr)
    min_num = min(arr)
    avg = sum(arr)/len(arr)
    return max_num, min_num, avg


arr = [1, 2, 3, 4, 5, 6, 7, 8]    
print(maxMinAvg(arr))    
