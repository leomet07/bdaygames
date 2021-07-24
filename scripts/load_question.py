import csv
import json
import requests


with open("ask.txt", "r", encoding="utf-8") as file:

    lines = file.readlines()
    for line in lines:
        if line == "" or line == "\n":
            continue
        line = str(" ".join(line.strip().split(" ")[1:]))
        print(line)
        
        response = requests.request("POST", "http://127.0.0.1:5678/api/db/create_question", json={"question" : line}, headers={"Content-Type": "application/json"})

        print(response.text)

        
    
