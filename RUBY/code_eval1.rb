def fizzbuzz(arr) 
  factor1 = arr[0]
  factor2 = arr[1] 
  length = arr[2]
  result = []
  (1..length).each do |i|
    if i % (factor1 * factor2)  == 0
      result << "FB"
    elsif i % factor1 == 0
      result << "F" 
    elsif i % factor2 == 0 
      result << "B"
    else 
      result << i 
    end   
  end
  result
end 

puts fizzbuzz([3, 5, 10]) == [1, 2, "F", 4, "B", "F", 7, 8, "F", "B"] 
puts fizzbuzz([2, 7, 15]) == [1, "F", 3, "F", 5, "F", "B", "F", 9, "F", 11, "F", 13, "FB", 15]
