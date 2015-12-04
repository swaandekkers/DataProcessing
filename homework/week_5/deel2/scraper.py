#!/usr/bin/env python
# Name: Swaan Dekkers
# Student number: 10437495
'''
This script crawls the temperature and date.
'''
# Python standard library imports
import json
import re
INITIAL_CSV = 'income.csv'
OUTPUT_JSON = 'output.json'
    
if __name__ == '__main__':

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.

    with open(INITIAL_CSV, 'r') as r:
    	r = r.readlines()[1:]

    python_list = []
    with open(OUTPUT_JSON, 'wb') as f:
    	for line in r:
            if line.find('"') != -1:
                token1 = line.split('"')
                country = token1[1].split()
                tokens2 = token1[2].split(',')
                code = tokens2[1].split()
                income = tokens2[2].split()
    	    else:
                token1 = line.split(',')
                country = token1[2]
                code = token1[3]
                income = token1[4].strip()
            python_list.append({"country": country, "code": code, "income": income})
        print python_list
        json.dump(python_list, f, indent = 4)




