import './CivicInfo.css';

import React, { Component } from 'react';
import CivicCard from '../CivicCard';

class CivicInfo extends Component {
    render() {
        return (
            
            <section className='civic-info'>
                <section className='civic-search'>
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

                <CivicCard />
            </section>
        );
    }
}
 
export default CivicInfo;