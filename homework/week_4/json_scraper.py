#!/usr/bin/env python
# Name: Swaan Dekkers
# Student number: 10437495
'''
This script crawls the temperature and date.
'''
# Python standard library imports
import json
import re
INITIAL_CSV = 'KNMI.txt.tsv'
OUTPUT_JSON = 'output.json'
    
if __name__ == '__main__':

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.

    with open(INITIAL_CSV, 'r') as r:
    	r = r.readlines()[12:]

    python_list = []
    with open(OUTPUT_JSON, 'wb') as f:
    	for line in r:
    	    token = line.split(',')
    	    date = token[1][:4] + '/' + token[1][4:6] + '/' + token[1][6:]
    	    temperature = token[2].strip()
    	    python_list.append([date, temperature])
    	json.dump(python_list, f)
   	print python_list



