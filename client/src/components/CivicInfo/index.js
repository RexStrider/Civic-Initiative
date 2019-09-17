import './CivicInfo.css';

import React, { Component } from 'react';

class CivicInfo extends Component {
    render() {
        return (
            <section className='civic-info'>
                <label>Search for a representative </label>
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
        );
    }
}
 
export default CivicInfo;