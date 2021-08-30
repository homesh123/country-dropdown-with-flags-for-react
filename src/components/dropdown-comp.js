import React from 'react'
import $ from 'jquery'
import './js/countrySelect.js'
import './css/countrySelect.css'


class CountryDropdown extends React.Component {
     handleChange = (e) => {
        console.log(e.target.value);
    };
    componentDidMount(){
    this.$el = $(this.el);
        this.$el.countrySelect({
            preferredCountries: this.props.preferredCountries
        });
        $(this.el).change(function() {
            $(this).trigger('click');
            
        })

    }
   
    render() {
        return (
            <input id={this.props.id} className={this.props.className} defaultValue={this.props.value} ref={el => this.el = el} onClick={this.props.handleChange}/>
         )
    }
}

export default CountryDropdown