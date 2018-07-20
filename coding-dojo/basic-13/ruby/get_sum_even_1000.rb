# Write a function that would print the sum of all the even numbers from 1 to 1000

def print_sum_1000(num)
  sum = 0
  for num in 0..num do
    if num % 2 == 0
      puts sum += num
      num += 1
    end  
  end
  return sum
end

print_sum_1000(1000)
