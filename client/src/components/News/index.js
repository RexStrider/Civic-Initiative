import './News.css';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
    render() {
        console.log(this.props);

        console.log(this.props.articles);

        return (
            <section className='News'>
                { this.props.articles && this.props.articles.length > 0
                ? this.props.articles.map((article, key) => {
                    return this.renderNewsCard(article, key);
                })
                : this.renderError() }
            </section>
        );
    }

    renderNewsCard = (article, key) => {
        console.log(article);
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

    renderError = () => {
        return (
            <section className='news-card'>
                <h1>
                    Unfortunately we could not find any articles that mentioned your representative.
                </h1>
                <p>This issue might have occurred because the news page was refreshed. We understand this is frustrating and we are currently working on this issue. In the meantime, I recommend going back to the main page.</p>
                <Link to='/'>Main page</Link>
            </section>
        );
    }
}
 
export default News;