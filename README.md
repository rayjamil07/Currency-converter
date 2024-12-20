Currency Converter Application
Overview
The Currency Converter application allows users to convert between different currencies using real-time exchange rates. The app uses the ExchangeRatesAPI to fetch the latest currency exchange rates and allows users to select an input amount and convert it to another currency.

Features
Fetches real-time exchange rates using an API.
Allows users to input an amount in their chosen currency.
Allows users to select a target currency from a list.
Displays the converted amount based on real-time exchange rates.
Technologies Used
HTML: For structuring the layout of the page (input fields, buttons, and output).
CSS: For styling the user interface (UI).
JavaScript: For interacting with the API, handling the user inputs, and performing calculations.
ExchangeRatesAPI: A REST API that provides exchange rates for various currencies.
Prerequisites
Before running the application, you need the following:

A working internet connection to fetch exchange rates from the API.
A browser (e.g., Chrome, Firefox, etc.) to run the HTML file.
Setup
Clone or download the project.
Open the index.html file in a browser.
The app will load and fetch real-time exchange rates when the page is ready.
How It Works
1. API Setup
The app uses the ExchangeRatesAPI, which requires an API key for accessing the data. The following URL structure is used to fetch the exchange rates:

js
Copy code
const base_url = 'http://api.exchangeratesapi.io/v1';
const api_key = '7fcbc3067177395559f895d18e5f4f55';
const endpoint = 'latest';
const url = `${base_url}/${endpoint}?access_key=${api_key}`;
The base_url points to the API endpoint, and the api_key is a personal key required to authenticate requests.

2. Fetching Exchange Rates
When the page loads (DOMContentLoaded event), the app fetches exchange rates by calling the fetchExchangeRates() function. The function sends a GET request to the API, and once the data is retrieved, it processes the response:

js
Copy code
fetch(url)
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        inputCurrency.placeholder = data.base;
        Object.keys(data.rates).forEach((key) => {
            const currencyOption = document.createElement('option');
            currencyOption.value = data.rates[key];
            currencyOption.textContent = key;
            currecySelect.appendChild(currencyOption);
        });
    });
The data.base is used to set the placeholder text for the input field.
The data.rates object contains the exchange rates for different currencies. The app dynamically creates a dropdown (<select>) of available currencies based on the data.
3. Converting Currencies
When the user clicks the "Convert" button, the app performs the conversion by multiplying the input value by the selected exchange rate:

js
Copy code
document.getElementById('convert').addEventListener('click', () => {
    const userAmount = parseFloat(inputCurrency.value);
    const conversionRate = parseFloat(currecySelect.value);

    const convertedAmount = (userAmount * conversionRate).toFixed(2);
    exchangeResult.innerText = convertedAmount;
});
userAmount is the value entered by the user.
conversionRate is the rate selected by the user.
The converted amount is displayed in the exchangeResult element.
4. Error Handling
Currently, no explicit error handling is implemented. It is recommended to add error handling for cases like invalid user input, API errors, or network issues.

File Structure
bash
Copy code
├── index.html          # Main HTML structure
├── style.css           # Stylesheet for the app
└── script.js           # JavaScript for fetching data and handling logic
1. index.html
This file contains the HTML structure, including input fields, a currency selector dropdown, a convert button, and an area to display the result.

2. style.css
This file is used to style the user interface (UI) of the app. You can modify the design based on your preferences (e.g., colors, fonts, layout).

3. script.js
This file contains the JavaScript code that interacts with the API and handles the currency conversion logic.

Example Usage
Open the index.html file in your browser.
Enter an amount in the "Input" field (e.g., 100).
Select a target currency from the dropdown list.
Click the "Convert" button to see the converted amount displayed below.
Improvements & Future Enhancements
User Input Validation: Add checks to ensure the user input is a valid number.
Error Handling: Display a user-friendly error message if the API request fails or returns an error.
Currency Formatting: Format the converted amount according to the target currency (e.g., for decimals, thousands separator).
Additional Features:
Allow users to reverse the conversion (swap the input and target currencies).
Add more customization options, like a currency history or graphs.
License
This project is open-source 



