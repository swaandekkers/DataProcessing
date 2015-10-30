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
    list_row = []
    list_total = []
    # Do this for all 50 series
    for series in dom.by_tag("tr.detailed")[:50]:
        genres = str("")
        actors = str("")

        # Find the title of the serie
        td = series.by_tag("td.title")[0]
        for a in td.by_tag("a")[:1]:
            title = str(a[0])
            list_row.append(title)

        # Find the ranking of the serie
        div1 = td.by_tag("div.user_rating")[0]
        div2 = div1.by_tag("div.rating")[0]
        span1 = div2.by_tag("span.rating-rating")[0]
        for span2 in span1.by_tag("span.value"):
            ranking = str(span2[0])
            list_row.append(ranking)

        # Find the genre of the serie
        for span in td.by_tag("span.genre"):
            for genre in span.by_tag("a"):
                genres += str(genre[0])
                genres += ", "
            genres = genres[:-2]
            list_row.append(genres)

        # Find the actors who play in the serie
        for span in td.by_tag("span.credit"):
            for actor in span.by_tag("a"):
                actors += str(actor[0])
                actors += ", "
            actors = actors[:-2]
            list_row.append(actors)

        # Find the runtime of the serie
        for span in td.by_tag("span.runtime"):
            time = str(span[0])
            num = time.split(" ")
            runtime = num[0]
            list_row.append(runtime)
        list_total.append(list_row)
        list_row = []
    return list_total


def save_csv(f, tvseries):
    '''
    Output a CSV file containing highest ranking TV-series.
    '''
    writer = csv.writer(f)
    writer.writerow(['Title', 'Ranking', 'Genre', 'Actors', 'Runtime'])
    for serie in tvseries:
        writer.writerow(serie)
    
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