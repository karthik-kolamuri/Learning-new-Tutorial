// https://open.er-api.com/v6/latest/ -- API for the converter

import axios from 'axios';
const convertCurrency = async (amount, fromCurrency, toCurrency) => {
    try{
        const URI=`https://open.er-api.com/v6/latest/${fromCurrency}`;
        const response=await axios.get(URI)    
        
            console.log(response.data);
            
            console.log(URI+" "+response.status);
            const rates=response.data.rates;
            console.log(rates);
            const convertedAmount = (amount * rates[toCurrency]).toFixed(2);
            console.log(`Converted amount: ${convertedAmount} ${toCurrency}`);
            return convertedAmount;
        
        
    }
    catch(error){
        console.error('Error:', error);
    }

}
export default convertCurrency;