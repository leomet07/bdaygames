import csv
import json
import requests

filename = input("What file to load? ")
with open(filename) as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    labels = []
    for row in csv_reader:
        
        if line_count == 0:
            print(row)
            labels = row
            line_count += 1
            continue
        line_count += 1
        
        asdict = {}

        for i in range(len(row)):
            
            asdict[labels[i]] = row[i]



        print(json.dumps(asdict))
               

        response = requests.request("POST", "http://127.0.0.1:5678/api/db/create_item", json=asdict, headers={"Content-Type": "application/json"})

        print(response.text)

        
    print(f'Processed {line_count} lines.')

