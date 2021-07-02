import React, { Component } from 'react'
import NewsArticle from './NewsArticle'

class NewsContainer extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div className="news-stream-wrapper">
                <h1>NewsContainer here Here</h1>
                {this.props.newsArticles.map(article => {
                    console.log(article)
                    return (<NewsArticle article={article}/>)})}
            </div>
        )

    }
    
}

export default NewsContainer