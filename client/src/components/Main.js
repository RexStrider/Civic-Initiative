import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CivicInfo from './CivicInfo'

import { getCivicInfo } from '../utilities/api/civicInfo';

// const CivicInfo = () => { return (<h1>'Civic Information component placeholder'</h1>)}
const News = () => { return (<h1>'News component placeholder'</h1>)}

// top-most level of our application
class Main extends Component {

    state = {
        // users address
        address: '',
        // google civic information data
        civicData: { divisions: [] }
    }

    handleInput = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value });
    }

    handleKeyPress = async event => {
        if (event.key === 'Enter') {
            const address = this.state.address;
            const data = await getCivicInfo(address);
            this.setState({ civicData: data.body });
        }
    }

    render() { 
        return (
            <section className='Main '>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={CivicInfo} />
                        <Route path='/news' component={News} />
                    </Switch>
                </BrowserRouter>
            </section>
        );
    }
}
 
export default Main;