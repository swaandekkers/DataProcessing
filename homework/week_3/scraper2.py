#!/usr/bin/env python
# Name: Swaan Dekkers
# Student number: 10437495
'''
This script crawls the IMDB top 250 movies.
'''
# Python standard library imports
import csv

import re
INITIAL_CSV = 'KNMI.txt.tsv'
OUTPUT_CSV = 'output2.csv'
    
if __name__ == '__main__':

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.

    with open(INITIAL_CSV, 'r') as r:
      r = r.readlines()[12:]

    with open(OUTPUT_CSV, 'wb') as f:
      writer = csv.writer(f) 
      temp_list = [] 
      for line in r:
        token = line.split(',')
        date = token[1][:4] + '/' + token[1][4:6] + '/' + token[1][6:]
        temperature = token[2].strip()
        writer.writerow([temperature])
        temp_list.append(temperature)

    print temp_list



