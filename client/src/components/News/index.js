import './News.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    constructor(props) {
        super(props);
        const query = window.sessionStorage.query;
        const pageNum=this.props.pageNum;
        this.props.handleNewsApiCall(query, pageNum);
    }
    render() {
        const articles = this.props.articles;
        const query = this.props.query;

        return (
            <section className='News'>
                {articles && articles.length > 0
                ? <section className='news-card'>
                    <p>The following articles were retrieved by looking for any reference to {query.substring(1, query.length-1)}.</p>
                    <p>This includes articles that they may have been credited with contributing to.</p>
                    <p>Some or all of the articles below may not directly be about {query.substring(1, query.length-1)}.</p>
                    <p>However, the articles may still give you a general sense of the kinds of issues that your representative cares about.</p>
                    <Link to='/'>Back to main page</Link>
                </section>
                : null}
                { articles && articles.length > 0
                ? articles.map((article, key) => {
                        return ( this.renderNewsCard(article, key) );
                    })
                : ! articles
                    ? this.renderPlaceholder()
                    : articles.length > 0
                        ? this.renderPlaceholder()
                        : this.renderError() }
            </section>
        );
    }

    renderNewsCard = (article, key) => {
        // console.log(article);
        return (
            <section className='news-card' key={key}>
                <section className='card-body'>
                    <h4>{article.title}</h4>
                    { article.author
                    ? <h5>by {article.author}</h5>
                    : <h5>author not found</h5> }
                    <p>{article.description}</p>
                    <a href={article.url}>{ article.source.name}</a>
                </section>
            </section>
        );
    }

    renderPlaceholder = () => {
        return (
            <section className='news-card'>
                <h1>Please wait a moment while your articles load.</h1>
            </section>
        )
    }
    renderError = () => {
        return (
            <section className='news-card'>
                <h1>
                    Unfortunately we could not find any articles that mentioned your representative.
                </h1>
                <p>You may find more information about your representative by checking out one of the other links on the previous page.</p>
                <Link to='/'>Main page</Link>
            </section>
        );
    }
}
 
export default News;