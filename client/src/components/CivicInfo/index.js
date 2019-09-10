import './CivicInfo.css';

import React, { Component } from 'react';

class CivicInfo extends Component {
    // state = {  }
    render() {
        console.log('props-address:', this.props.address);
        return (
            <section className='civic-info'>
                <label>Search for a representative </label>
                <input
                    name='address'
                    value={this.props.address}
                    onChange={this.props.handleInput}
                    onKeyPress={this.props.handleKeyPress}
                    placeholder='enter an address' />
            </section>
        );
    }
}
 
export default CivicInfo;