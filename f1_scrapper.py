# Import necessary libraries
from selenium import webdriver
from bs4 import BeautifulSoup
import pandas as pd

def scrape_data():
    # URL to scrape
    url = "https://www.formula1.com/en/results.html/2023/drivers.html"

    # Use webdriver to get page source
    driver = webdriver.Chrome()
    driver.get(url)

    # Parse page source with BeautifulSoup
    soup = BeautifulSoup(driver.page_source, 'lxml')

    # Close the webdriver
    driver.close()

    # Find the table on the page
    table = soup.find_all('table')[0]

    # Initialize an empty DataFrame to store the data
    df = pd.DataFrame(columns=['Position', 'Driver', 'Nationality', 'Car', 'Points'])

    # Iterate over each row in the table
    for row in table.tbody.find_all('tr'):
        # Get the columns in the row
        cols = row.find_all('td')
    
        # Extract the data from the columns
        data = {
            'Position': cols[1].text.strip(),
            'Driver': cols[2].text.strip(),
            'Nationality': cols[3].text.strip(),
            'Car': cols[4].text.strip(),
            'Points': cols[5].text.strip()
        }
    
        # Append the data to the DataFrame
        df = pd.concat([df, pd.DataFrame(data, index=[0])], ignore_index=True)
    
    # Return the DataFrame
    return df