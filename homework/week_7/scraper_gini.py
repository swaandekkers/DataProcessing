#!/usr/bin/env python
# Name: Swaan Dekkers
# Student number: 10437495
'''
This script crawls the gini and country
'''
# Python standard library imports
import json
import re
import csv
INITIAL_CSV = 'gini.csv'
OUTPUT_JSON = 'output_gini.json'
    
if __name__ == '__main__':

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.

    with open(INITIAL_CSV, 'r') as r:
        r = r.readlines()[1:]

    python_dict = {}
    with open(OUTPUT_JSON, 'wb') as f:
        for line in r:
            tokens = line.split(',')
            value2000 = tokens[(len(tokens) - 3)]
            value2005 = tokens[(len(tokens) - 2)]
            value2010 = tokens[(len(tokens) - 1)].strip()
            code = tokens[(len(tokens) - 4)]
            python_dict[code] = [value2000, value2005, value2010]
        print python_dict
        json.dump(python_dict, f, indent = 4)