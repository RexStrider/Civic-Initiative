import './CivicInfo.css';

import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import CivicCard from '../CivicCard';

class CivicInfo extends Component {

    constructor(props) {
        super(props);

        this.props.setStateArticles(null);
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
            if (i % 2 === 1) result.push(
                this.renderCardRow(
                    this.renderCivicCard(civicData[i-1]),
                    this.renderCivicCard(civicData[i]),
                    `key_${i}`
                )
            );
        }
        if ((civicData.length-1) % 2 === 0) result.push(
            this.renderCardRow(
                this.renderCivicCard(civicData[civicData.length-1]),
                null,
                `key_${civicData.length-1}`
            )
        );

        return result;
    }

    renderCivicCard = representative => {
        return (
            <CivicCard
            representative={ representative }
            key={ representative.name } />
        );
    }

    renderCardRow = (cardA, cardB, key) => {
        return (
            <section className='civic-card-row' key={key}>
                {cardA}
                {cardB}
            </section>
        );
    }
}
 
export default CivicInfo;