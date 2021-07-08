import React, { Component } from 'react'

import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'dompurify'

import './articles.css'

const apiRoute = "http://localhost:8000/"

const errorArticle = {
    title: 'Article not found...',
    content: '<p>We are sorry, but we cant find this article. Please click <a href="../articles">here</a> to view our current articles and howtos. </p><br /> <img src="/images/lostbee.png" />'
}

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }

    async componentDidMount() {
        const article = await axios.get(`${apiRoute}articles/get/${this.props.match.params.id}`)
            .then(resp => {
                console.log(resp.data)
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
        // console.log(article.data)
        // this.setState({
        //     article: article.data
        // })
    }

    render() {
        const article = this.state.article
        return (
            <div>
                <h3>{article.title}</h3>
                <div>
                    {ReactHtmlParser(DOMPurify.sanitize(article.content))}
                </div>

            </div>
        )
    }
    
}

export default Article