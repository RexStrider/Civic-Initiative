import './CivicCard.css';

import React, { Component } from 'react';

class CivicCard extends Component {
    render() {
        const links = this.getLinks(this.props.representative);
        return (
            <section className='civic-card'>
                <section className='card-body'>
                    <section className='card-info'>
                        { this.props.representative.photoUrl ? <img src={this.props.representative.photoUrl} alt='' style={{width: '200px'}}/> : null }

                        <section>
                            <h3 className='card-title'>{ this.props.representative.name }</h3>
                            <h4 className='card-subtitle'>{ this.props.representative.title }</h4>
                            <h4 className='card-subtitle'>{ this.props.representative.government }</h4>
                        </section>
                    </section>

                    <section className='card-contact'>
                        { this.renderAddresses(this.props.representative.addresses) }
                        { this.renderPhones(this.props.representative.phones) }
                    </section>

                    <section className='card-links'>
                        { this.renderCardLinks(links) }
                    </section>
                </section>
            </section>
        );
    }

    getLinks = representative => {
        const links = [];

        if (representative.urls) {
            links.push(
                <a href={representative.urls[0]} >
                    Official Website
                </a>
            );
        }

        if (representative.facebookId) {
            links.push(
                <a href={(`https://www.facebook.com/${ representative.facebookId }`)}
                className="card-link">
                    Facebook
                </a>
            );
        }

        if (representative.twitterId) {
            links.push(
                <a href={(`https://twitter.com/${ representative.twitterId }`)}
                className="card-link">
                    Twitter
                </a>
            );
        }

        if (representative.youtubeId) {
            let href = '';
            if (representative.youtubeId.length > 23) href = `https://www.youtube.com/channel/${representative.youtubeId}`;
            else href = `https://www.youtube.com/user/${representative.youtubeId}`;
            links.push(
                <a href={( href )}
                className="card-link">
                    YouTube
                </a>
            );
        }

        return links;
    }

    renderCardLinks = links => {
        const result = [];
        if (links)
        for (let i=0; i < links.length; i++) {
            if (i % 2 === 1) result.push(this.renderLinkRow(links[i-1], links[i], `key_${i}`));
        }
        if ((links.length-1) % 2 === 0) result.push(this.renderLinkRow(links[links.length-1], null, `key_${links.length-1}`));
        return result;
    }

    renderLinkRow = (linkA, linkB, key) => {
        return(
            <section key={key} className='card-link-row'>
                {linkA}
                {linkB}
            </section>
        )
    }

    // creates the phone number components and returns them in an array
    renderPhones(phoneNumbers) {
        const ary = [];
        if (phoneNumbers)
        for (let i=0; i<phoneNumbers.length; i++) {
            const phone = phoneNumbers[i];
            ary.push(this.renderPhoneNumber(phone));
        }
        return ary;
    }

    // creates the address components and returns them in an array
    renderAddresses(addresses) {
        const ary = []
        if (addresses)
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