# Name : Swaan Dekkers
# Student number : 10437495
'''
This module contains an implementation of split_string.
'''

# You are not allowed to use the standard string.split() function, use of the
# regular expression module, however, is allowed.
# To test your implementation use the test-exercise.py script.

# A note about the proper programming style in Python:
#
# Python uses indentation to define blocks and thus is sensitive to the
# whitespace you use. It is convention to use 4 spaces to indent your
# code. Never, ever mix tabs and spaces - that is a source of bugs and
# failures in Python programs.

import re

def split_string(source,separators):
	counter_beg = 0
	counter_end = 0
	j = 0
	length = len(separators)
	output = []

	for char in source:
		for separator in separators:
			if char != separator:
			    j += 1

		if j == length:
			counter_end += 1

		if j != length:
			if counter_beg != counter_end:
				output.append(source[counter_beg:counter_end])
			counter_beg = counter_end
			counter_beg += 1
			counter_end += 1

		j = 0
	if counter_beg != counter_end:
		output.append(source[counter_beg:])
	return output

if __name__ == '__main__':
    # You can try to run your implementation here, that will not affect the
    # automated tests.
    print split_string('abc', '')  # should print: ['c', 'd', 'r']

