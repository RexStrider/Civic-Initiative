import './Main.css';

import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CivicInfo from './CivicInfo'
import News from './News';

import { getCivicInfo } from '../utilities/api/civicInfo';
// import { getArticles } from '../utilities/api/news';

// top-most level of our application
class Main extends Component {

    state = {
        // users address
        address: '',
        // google civic information data
        civicData: { }
    }

    handleInput = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleCivicApiCall = async event => {
        const address = this.state.address;
        const key = event.key;
        const type = event.type;
        if (address && (key === 'Enter' || type === 'click')) {
            const address = this.state.address;
            const response = await getCivicInfo(address);
            const civicData = this.parseCivicData(response.body);
            this.setState({ civicData });
        }
    }

    parseCivicData = (civicData) => {
        const result = [];

        try {
            const divisions = Object.entries(civicData.divisions);
            
            for(let i=0; i < divisions.length; i++) {
                const gov = divisions[i][1];
                const officeIndices = gov.officeIndices;
                for (let j=0; j < officeIndices.length; j++) {
                    const index = officeIndices[j];
                    const office = civicData.offices[index];
                    const officialIndices = office.officialIndices;
                    for (let k=0; k < officialIndices.length; k++) {
                        const index = officialIndices[k];
                        const official = civicData.officials[index];
                        const representative = {
                            name: official.name,
                            title: office.name,
                            government: gov.name,
                            addresses: [],
                            phones: official.phones,
                            facebookId: '',
                            twitterId: '',
                            youtubeId: '',
                            otherId: '',
                            photoUrl: official.photoUrl,
                            urls: official.urls
                        }
                        const officialAddresses = official.address;
                        const officialChannels = official.channels;
                        if (officialAddresses) {
                            for (let l=0; l < officialAddresses.length; l++) {
                                const address = officialAddresses[l];
                                representative.addresses.push([
                                    address.line1 + ' ' + address.line2 + ' ' + address.line3,
                                    address.city + ' ' + address.state + ' ' + address.zip
                                ]);
                            }
                        }
                        if (officialChannels) {
                            for (let l=0; l < officialChannels.length; l++) {
                                const channel = officialChannels[l];

                                if ('facebook' === channel.type.toLowerCase()) {
                                    representative.facebookId=channel.id;
                                }
                                else if ('twitter' === channel.type.toLowerCase()) {
                                    representative.twitterId=channel.id;
                                }
                                else if ('youtube' === channel.type.toLowerCase()) {
                                    representative.youtubeId=channel.id;
                                }
                                else {
                                    representative.otherId=channel.id;
                                }
                            }
                        }

                        result.unshift(representative);
                    }
                }
            }
        } catch (error) {
            console.log(error);
        }

        return result
    }

    render() {
        return (
            <section className='Main '>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/'
                            render={(props) =>
                                <CivicInfo
                                address={this.state.address}
                                handleInput={this.handleInput}
                                handleCivicApiCall={this.handleCivicApiCall}
                                civicData={this.state.civicData}
                                {...props} />
                            } />
                        <Route path='/news' component={News} />
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
 
export default Main;