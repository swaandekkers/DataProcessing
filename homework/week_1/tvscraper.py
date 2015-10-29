#!/usr/bin/env python
# Name: Swaan Dekkers
# Student number: 10437495
'''
This script scrapes IMDB and outputs a CSV file with highest ranking tv series.
'''
# IF YOU WANT TO TEST YOUR ATTEMPT, RUN THE test-tvscraper.py SCRIPT.
import csv

from pattern.web import URL, DOM

TARGET_URL = "http://www.imdb.com/search/title?num_votes=5000,&sort=user_rating,desc&start=1&title_type=tv_series"
BACKUP_HTML = 'tvseries.html'
OUTPUT_CSV = 'tvseries.csv'

import re

def extract_tvseries(dom):
    '''
    Extract a list of highest ranking TV series from DOM (of IMDB page).

    Each TV series entry should contain the following fields:
    - TV Title
    - Ranking
    - Genres (comma separated if more than one)
    - Actors/actresses (comma separated if more than one)
    - Runtime (only a number!)
    '''
    for e in dom.by_tag("tr.detailed")[:1]:
        genres = str("")
        actors = str("")
        for b in e.by_tag("td.title")[:1]:
            for d in b.by_tag("a")[:1]:
                title = d[0]
                print title
            for j in b.by_tag("div.user_rating")[:1]:
                    for k in j.by_tag("div.rating")[:1]:
                        for l in k.by_tag("span.rating-rating")[:1]:
                            for ranking in l.by_tag("span.value"):
                                print ranking[0]
            for f in b.by_tag("span.genre"):
                for genre in f.by_tag("a"):
                        genres += str(genre[0])
                        genres += ", "
            for h in b.by_tag("span.credit"):
                for actor in h.by_tag("a"):
                        actors += str(actor[0])
                        actors += ", "
            for m in b.by_tag("span.runtime"):
                time = str(m[0])
                num = time.split(" ")
                runtime = num[0]
                print runtime
            
        genres = genres[:-2]
        actors = actors[:-2]
        print genres
        print actors

    # ADD YOUR CODE HERE TO EXTRACT THE ABOVE INFORMATION ABOUT THE
    # HIGHEST RANKING TV-SERIES
    # NOTE: FOR THIS EXERCISE YOU ARE ALLOWED (BUT NOT REQUIRED) TO IGNORE
    # UNICODE CHARACTERS AND SIMPLY LEAVE THEM OUT OF THE OUTPUT.

    return []  # replace this line as well as appropriate


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])

    # ADD SOME CODE OF YOURSELF HERE TO WRITE THE TV-SERIES TO DISK

if __name__ == '__main__':
    # Download the HTML file
    url = URL(TARGET_URL)
    html = url.download()

    # Save a copy to disk in the current directory, this serves as an backup
    # of the original HTML, will be used in testing / grading.
    with open(BACKUP_HTML, 'wb') as f:
        f.write(html)

    # Parse the HTML file into a DOM representation
    dom = DOM(html)

    # Extract the tv series (using the function you implemented)
    tvseries = extract_tvseries(dom)

    # Write the CSV file to disk (including a header)
    with open(OUTPUT_CSV, 'wb') as output_file:
        save_csv(output_file, tvseries)