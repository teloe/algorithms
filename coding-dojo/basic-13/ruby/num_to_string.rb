# Write a function that takes an array of numbers and replaces any negatives within the array with the string "Dojo"

def num_to_string(a)
  n = 0
  a.each do |n|
    if a[n] < 0
      a[n] = "Dojo"
    end
  end
  return  a
end

a = [-1, 0, 2, 34, -23]
puts num_to_string(a)
