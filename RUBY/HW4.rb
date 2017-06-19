require 'byebug'

# Even Splitters
# ------------------------------------------------------------------------------
# Return an array of characters on which we can split an input string to produce
# substrings of the same length.

# Don't count empty strings after the split.

# Here's an example for "banana":
#
# "banana".split("a") # => ["b", "n", "n"] (all elements same length)
# "banana".split("b") # => ["", anana"] (all elements same length - there's only
# one element "anana" because the empty string doesn't count)
# "banana".split("n") # => ["ba", "a", "a"] (all elements NOT same length)
#
# result: ["b", "a"]
#
# ------------------------------------------------------------------------------

=begin
    input: string
    output: array of chars

    1) find uniq letters
    2) loop over string and split on letters
    3) check following array for same length substrings

=end

def even_splitters(string)
    results = []
    letters = string.split('').uniq #string.chars.uniq

    hash = Hash.new()


    letters.each do |char|
        split_on_char = string.split(char)
        split_on_char.delete('')
        check = split_on_char.all? { |el| el.length == split_on_char[0].length }
        results << char if check
    end

    results
end

puts "-----Even Splitters----"
puts even_splitters("") == []
puts even_splitters("t") == ["t"]
puts even_splitters("jk") == ["j", "k"]
puts even_splitters("xoxo") == ["x", "o"]
puts even_splitters("banana") == ["b","a"]
puts even_splitters("mishmash") == ["m","h"]
puts even_splitters("abacbab") == ["c"]
