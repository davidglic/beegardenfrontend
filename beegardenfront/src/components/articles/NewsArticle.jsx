import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'dompurify'

const NewsArticle = (props) => {
    const article = props.article
    const cleanContent = DOMPurify.sanitize(props.article.content)
    return (
        <div className="news-wrapper">
            
            <h3 className='title'>{article.title}</h3>
            {ReactHtmlParser(cleanContent)}
            
        </div>
    )
}

export default NewsArticle