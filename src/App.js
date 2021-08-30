import './App.css';
import CountryDropdown from './components/dropdown-comp';
import React from 'react';

function App() {
  return (
    	<CountryDropdown id="cp" className='countryDropdown' preferredCountries={['gb', 'us']} value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>
  );
}

export default App;
