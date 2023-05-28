# F1 Driver Standings Web Scraper and Visualizer

This project is a web application that scrapes real-time Formula 1 driver standings data from the official Formula 1 website and presents it in a user-friendly and interactive way.

## Features

- Real-time scraping of driver standings data from the Formula 1 website.
- Display of scraped data in a responsive and modern web interface built with React.
- Backend server built with Flask.

## Technologies Used

- Python
- Flask
- BeautifulSoup
- React
- HTML/CSS/JavaScript
- Axios

## Installation and Setup Instructions

1. Clone this repository.
2. Navigate to the directory of the cloned repository.
3. Install the required Python packages using pip:

    ```bash
    pip install -r requirements.txt
    ```
4. Navigate to the React application directory and install the required npm packages:

    ```bash
    cd f1-app
    npm install
    ```

## Usage Instructions

1. Start the Flask server:

    ```bash
    python app.py
    ```
2. In a separate terminal, start the React application:

    ```bash
    cd f1-app
    npm start
    ```
3. The React application will now be running at `localhost:3000`.

## Future Improvements

The application currently displays the real-time driver standings. In the future, I plan to add the following features:

- Historical data visualization.
- Predictive modeling for future races.

## License

This project is licensed under the terms of the MIT license.
