import './SearchBar.css';

import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <section className='search-bar'>
                <label>Search for a representative </label>
                <section>
                    <input
                    name='address'
                    value={this.props.address}
                    onChange={this.props.handleInput}
                    onKeyPress={this.props.handleCivicApiCall}
                    placeholder='enter an address' />
                    <button
                    type="submit"
                    onClick={this.props.handleCivicApiCall} >
                        Submit
                    </button>
                </section>
            </section>
        );
    }
}
 
export default SearchBar;