import './CivicInfo.css';

import React, { Component } from 'react';

class CivicInfo extends Component {
    // state = {  }
    render() { 
        return (
            <section className='civic-info'>
                <label>Search for a representative </label>
                <input
                    name='address'
                    // value={}
                    // onChange={}
                    // onKeypress={}
                    placeholder='enter an address' />
            </section>
        );
    }
}
 
export default CivicInfo;