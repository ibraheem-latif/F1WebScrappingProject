import json
from flask import Flask
from f1_scrapper import scrape_data

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"

@app.route('/scrape', methods=['GET'])
def scrape():
    data = scrape_data()
    return data.to_json(orient='records')


if __name__ == '__main__':
    app.run(debug=True)
