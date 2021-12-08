## Country dropdown with flags react component

--------------------------------------------------------
### Sample Code :

```Javascript
import './App.css';     
import React from 'react';  
import CountryDropdown from 'country-dropdown-with-flags-for-react';  

function App() {    
  return (  
    	<CountryDropdown  id="UNIQUE_ID" className='YOUR_CSS_CLASS' preferredCountries={['gb', 'us']}  value="" handleChange={e => console.log(e.target.value)}></CountryDropdown>   
  );    
}   

export default App;
```

### How to use?
- Import npm package: npm i country-dropdown-with-flags-for-react 
- Import CountryDropdown component from 'country-dropdown-with-flags-for-react' 
- add CountryDropdown tag with methods and attributes as shown above.
- handleChange method will return you the current selected country in dropdown. 
in above example. e.target.value is returning selected country name.
- You can add custom CSS class to this element to modify the style of component.
- Add Unique ID in id field or you can skip that attribute.

### Note:
- Use ```<meta charset="utf-8" />``` in head tag of your index.html if you see unwanted charecters in the country dropdown.


