import React, { Component } from 'react'
import NewsArticle from './NewsArticle'
import './news.css'

class NewsContainer extends Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <div className="news-stream-wrapper">
                <h2 className="sub-header">Announcements</h2>
                <div className="news-stream">
                {this.props.newsArticles.map(article => {
                    
                    return (<NewsArticle article={article}/>)})}
                </div>
            </div>
        )

    }
    
}

export default NewsContainer