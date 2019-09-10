import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Container } from 'react-bootstrap';

const CivicInfo = () => { return (<h1>'Civic Information component placeholder'</h1>)}
const News = () => { return (<h1>'News component placeholder'</h1>)}

// top-most level of our application
class Main extends Component {
    state = {  }
    render() { 
        return (
            <Container className='Main '>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={CivicInfo} />
                        <Route path='/news' component={News} />
                    </Switch>
                </BrowserRouter>
            </Container>
        );
    }
}
 
export default Main;