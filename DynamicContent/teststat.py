import json
import random
import time
from datetime import datetime, timedelta

def generate_fake_data():
    data = {
        "timestamps": [],
        "humidity": [],
        "windSpeed": [],
        "soilTemp": [],
        "soilHumidity": []
    }

    start_time = datetime.now() - timedelta(hours=24)
    interval = timedelta(minutes=30)

    for i in range(48):  
        current_time = start_time + i * interval
        hours_ago = 24 - (i // 2)
        data["timestamps"].append(f"-{hours_ago}hr")
        data["humidity"].append(round(random.uniform(20, 80))) 
        data["windSpeed"].append(round(random.uniform(0, 20))) 
        data["soilTemp"].append(round(random.uniform(50, 80))) 
        data["soilHumidity"].append(round(random.uniform(10, 50)))  
    return data

def save_to_json(data, filename):
    with open(filename, 'w') as f:
        json.dump(data, f, indent=4)

if __name__ == "__main__":
    for i in range(500):
        fake_data = generate_fake_data()
        save_to_json(fake_data, f'statdata.json')
        print(f"Fake data generated and saved to statdata.json")
        time.sleep(1)