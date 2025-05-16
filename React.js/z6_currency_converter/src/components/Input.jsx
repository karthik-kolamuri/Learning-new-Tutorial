import React from 'react';
import { useState } from 'react'; 
import convertCurrency from './functionl';
function App() {
  const [convertedValue, setConvertedValue] = useState(0);
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("INR");
  const currencyConverter = async () => {
    try{
      const convertedAmt=await convertCurrency(amount,fromCurrency,toCurrency);
      console.log(convertedAmt);
      setConvertedValue(convertedAmt);
      console.log(`Converted amount: ${convertedAmt} ${toCurrency}`);
    }
    catch(error){
      console.error('Error:', error);
    }
  }
  
  return (
    <div className="relative w-screen h-screen overflow-hidden text-black">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(https://wallpapercave.com/wp/lrKU8Nu.jpg)` }}
      ></div>

      {/* Centered content box */}
      <div className="relative z-10 flex justify-center items-center w-full h-full">
        <div className="bg-white/80 shadow-xl p-8 rounded-xl">
          <h1 className="text-3xl font-bold text-center text-black">Currency Converter</h1>
          <div className='flex flex-row items-center justify-center mt-4 gap-5'>
            <div>
              <label htmlFor="from">From</label>
              <input className='mx-2 bg-gray-500 px-2 rounded-full' type="number"  onChange={(e) => setAmount(e.target.value)} defaultValue={amount}  />
            </div>
            <div>
              <label htmlFor="from">Type</label>
              <select className='mx-2 text-center bg-gray-500 w-55 rounded-full' onChange={(e)=>{setFromCurrency(e.target.value)}} name="Type" id="">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="INR">INR</option>
              </select>

            </div>
          </div>
          {/* to div */}
          <div className='flex flex-row items-center justify-center mt-4 gap-5'>
            <div>
              <label className='mx-2.5' htmlFor="to">To</label>
              <input className='mx-2 bg-gray-500 px-2 rounded-full' type="number" readOnly value={convertedValue} />
            </div>
            <div>
              <label htmlFor="from">Type</label>
              <select className='mx-2 text-center bg-gray-500 w-55 rounded-full' defaultValue={'INR'} name="Type" onChange={(e)=>{setToCurrency(e.target.value)}} id="">
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="AUD">AUD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="INR">INR</option>
              </select>

            </div>
          </div>
          <div className='flex flex-row items-center  justify-center mt-4 gap-5'>
            <button className='bg-gray-400 text-white  px-2 py-1 rounded-full' onClick={currencyConverter}>Convert</button>
            </div>
        </div>
      </div>
    </div>
  );
}
export default App;