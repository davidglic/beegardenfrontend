import React, { Component } from 'react'

import axios from 'axios'
import ReactHtmlParser from 'react-html-parser'
import DOMPurify from 'dompurify'

import './articles.css'

const apiRoute = "http://localhost:8000/"

class Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            article: {}
        }
    }

    async componentDidMount() {
        const article = await axios.get(`${apiRoute}articles/get/${this.props.match.params.id}`)
        console.log(article.data)
        this.setState({
            article: article.data
        })
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