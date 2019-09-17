import './CivicInfo.css';

import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import CivicCard from '../CivicCard';

import pumpkinhead_photo from '../../assets/images/pumpkinhead.jpg';

class CivicInfo extends Component {

    representative = {
        name: "pumpkin head",
        title: "president?",
        government: "United States",
        addresses: [["123 white house", "Washington DC"]],
        phones: ["111-222-3333"],
        facebookId: "pumpkinhead",
        twitterId: null,
        otherId: "",
        photoUrl: pumpkinhead_photo,
        urls: ["https://www.whitehouse.gov"]
    }

    render() {
        return (
            <section className='civic-info'>
                <SearchBar
                address={this.props.address}
                handleInput={this.props.handleInput}
                handleCivicApiCall={this.props.handleCivicApiCall}
                {...this.props} />

                { this.props.civicData
                    ? this.renderCivicData(this.props.civicData)
                    : null }
            </section>
        );
    }

    renderCivicData = civicData => {
        const result = [];

        for (let i=0; i < civicData.length; i++) {
            result.push(this.renderCivicCard(civicData[i]));
        }

        return result;
    }

    renderCivicCard = representative => {
        return (
            <CivicCard representative={ representative } key={ representative.name } />
        );
    }
}
 
export default CivicInfo;