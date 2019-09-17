import React, { Component } from 'react';

import pumpkinhead_photo from '../../assets/images/pumpkinhead.jpg';

class CivicCard extends Component {
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
        let {start, end} = 0;
        // determines how much of the url to a representatives website is displayed on the card
        // while maintaining the full url for the anchor tag
        if (this.representative.urls) {
            const url = this.representative.urls[0]

            // determines if the url contains https or http
            start = url.substring(0, 5) === 'https' ? 8 : 7;
            // determines if the url has a '/' character at the end
            end = url.substring(url.length-1, url.length) === '/' ? url.length-1 : url.length;
        }
        return (
            <section className='civic-card'
                     key={ this.representative.name }>
                <section className='card-body'>
                    { this.representative.photoUrl ? <img src={this.representative.photoUrl} alt='' style={{width: '200px'}}/> : null }
                    <h5 className='card-title'>{ this.representative.name }</h5>
                    <h6 className='card-subtitle'>{ this.representative.title }</h6>
                    <h6 className='card-subtitle'>{ this.representative.government }</h6>
                    { this.renderPhones(this.representative.phones) }
                    { this.renderAddresses(this.representative.addresses) }
                    <section className='channels'>
                    
                        { this.representative.facebookId
                        ? (<a href={(`https://www.facebook.com/${ this.representative.facebookId }`)}
                              className="card-link">Facebook</a>)
                        : null }
                        
                        { this.representative.twitterId
                        ? (<a href={(`https://twitter.com/${ this.representative.twitterId }`)}
                              className="card-link">Twitter</a>)
                        : null }

                        { this.representative.otherId
                        ? (<a href={(`#`)}
                              className="card-link">this.representative.otherId</a>)
                        : null }
                    </section>

                    { this.representative.urls
                        ? ( <a href={this.representative.urls[0]}
                               className="card-link">{ this.representative.urls[0].substring(start, end) }
                            </a> )
                        : null }
                </section>
            </section>
        );
    }

    // creates the phone number components and returns them in an array
    renderPhones(phoneNumbers) {
        const ary = [];
        for (let i=0; i<phoneNumbers.length; i++) {
            const phone = phoneNumbers[i];
            ary.push(this.renderPhoneNumber(phone));
        }
        return ary;
    }

    // creates the address components and returns them in an array
    renderAddresses(addresses) {
        const ary = []
        for (let i=0; i<addresses.length; i++) {
            const address = addresses[i];
            ary.push(this.renderAddress(address));
        }
        return ary;
    }

    // renders a phone number component
    renderPhoneNumber(phone) {
        return ( 
        <div className='phone-number' key={ phone }>
            <p className="card-text">{ phone }</p>
        </div>);
    }

    // renders an address component
    renderAddress(address) {
        return(
            <div className='address' key={ address[0] + ', ' + address[1] }>
                <p className="card-text">{ address[0] }</p>
                <p className="card-text">{ address[1] }</p>
            </div>
        )
    }
}
 
export default CivicCard;