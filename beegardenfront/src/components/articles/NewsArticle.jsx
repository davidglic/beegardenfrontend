import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'dompurify'

const NewsArticle = (props) => {
    const article = props.article
    const cleanContent = DOMPurify.sanitize(props.article.content)
    return (
        <div className="article-wrapper">
            
            <h3>{article.title}</h3>
            {ReactHtmlParser(cleanContent)}
            
        </div>
    )
}

export default NewsArticle