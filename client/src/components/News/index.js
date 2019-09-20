import React, { Component } from 'react';

class News extends Component {
    render() {
        console.log(this.props);
        return (
            <section className='News'>
                {this.props.articles.map((article, key) => {
                    return this.renderNewsCard(article, key);
                })}
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
}
 
export default News;