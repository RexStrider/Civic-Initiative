import React, { Component } from 'react';

class News extends Component {
    // state = {  }
    render() {
        console.log(this.props);
        return (
            <section className='News'>
                One day there shall be news...
            </section>
        );
    }
}
 
export default News;