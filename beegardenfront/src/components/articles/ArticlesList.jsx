import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Article from './Article'
import NewsArticle from './NewsArticle'
import axios from 'axios'


const apiRoute = "http://localhost:8000/"

class ArticlesList extends Component {
    constructor(props){
        super(props)
        this.state = {
            howtos: [],
            articles: []
        }
      }
    

    async componentDidMount() {
        console.log("mounted")
        const articlesList = await axios.get(`${apiRoute}articles/article`)
        const howtos = await axios.get(`${apiRoute}articles/howto`)
        console.log(articlesList.data)
        console.log(howtos.data)
        this.setState({
            howtos: howtos.data,
            articles: articlesList.data

        })
        
        }
        
    render () {
        return (
            <div>
                <h2>Articles</h2>
                <div>
                    {this.state.articles.map(article => {
                        return (
                            <div>
                                <Link to={`/article/${article.id}`}>{article.title}</Link>
                                <div>{article.description}</div>
                            </div>
                        )
                    })}
                </div>
                <h2>How Tos</h2>
                <div>
                {this.state.howtos.map(article => {
                        return (
                            <div>
                                <Link to={`/article/${article.id}`}>{article.title}</Link>
                                <div>{article.description}</div>
                            </div>
                        )
                    })}
                <div>
                </div>
                    
                </div>
            
            </div>
        )

    }
    
}

export default ArticlesList