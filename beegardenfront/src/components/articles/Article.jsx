import React, { Component } from 'react'

import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'dompurify'

import './articles.css'

const apiRoute = "https://littlebeegardenbackend.herokuapp.com/"

//error Title and HTML for instances where article is not found by ID.
const errorArticle = {
    title: 'Article not found...',
    content: '<p>We are sorry, but we cant find this article. Please click <a href="../articles">here</a> to view our current articles and howtos. </p><br /> <img src="/images/lostbee.png" />'
}

//main react component
class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }

    async componentDidMount() {
        //fet and load article
        const article = await axios.get(`${apiRoute}articles/get/${this.props.match.params.id}`)
            .then(resp => {
                
                this.setState({
                    article: resp.data
                })  
            })
            .catch(err => {
                if(err.response) {
                    if (err.response.status === 404) {
                        this.setState({
                            article: errorArticle
                        })
                    } else {this.props.history.push('/error')}
                } else {this.props.history.push('/error')}
            })
    }

    render() {
        const article = this.state.article
        return (
            <div>
                <h2 className='title full-article-title'>{article.title}</h2>
                <div className="full-article">
                    {/* Sanitize html then parse into react elements. */}
                    {ReactHtmlParser(DOMPurify.sanitize(article.content))}
                </div>

            </div>
        )
    }
    
}

export default Article