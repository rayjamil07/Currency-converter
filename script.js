//initailizing our url

const base_url = 'http://api.exchangeratesapi.io/v1';

const api_key = '7fcbc3067177395559f895d18e5f4f55';
const endpoint = 'latest';
const url = `${base_url}/${endpoint}?access_key=${api_key}`;


//lets start calling the elements we need
document.addEventListener('DOMContentLoaded',() => {
    const inputCurrency = document.getElementById('input');
    const currecySelect = document.getElementById('select-currency')
    const exchangeResult = document.getElementById('result')



// Function to fetch exchange rates using .then
function fetchExchangeRates() {
        fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            inputCurrency.placeholder = data.base;

            
            Object.keys(data.rates).forEach((key) =>{
                const currencyOption  = document.createElement('option')
                currencyOption.value = data.rates[key];
                currencyOption.textContent = key;
                currecySelect.appendChild(currencyOption)
            })

            document.getElementById('convert').addEventListener('click', () =>{
                const userAmount = parseFloat(inputCurrency.value);
                const conversionRate = parseFloat(currecySelect.value);

                const convertedAmount = (userAmount * conversionRate).toFixed(2);

                exchangeResult.innerText = convertedAmount;
            })

            
        })
        
}

fetchExchangeRates()

})




