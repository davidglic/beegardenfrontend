import React, { Component } from 'react'
import Article from './Article'
import NewsArticle from './NewsArticle'

class ArticlesList extends Component {
    render () {
        return (
            <div>
                <h1>Artilces List here Here</h1>
                <Article />
                <NewsArticle />
            
            </div>
        )

    }
    
}

export default ArticlesList