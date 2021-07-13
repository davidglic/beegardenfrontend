import React, { Component } from 'react'
import { Link } from 'react-router-dom'
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
        //fetch articles and howtows from api
        const articlesList = await axios.get(`${apiRoute}articles/article`)
        const howtos = await axios.get(`${apiRoute}articles/howto`)

        //update state to display
        this.setState({
            howtos: howtos.data,
            articles: articlesList.data

        })
        
        }
        
    render () {
        return (
            <div className="main-wrapper">
                
                <div className="article-list">
                    <h2 className='title'>Articles</h2>
                    {this.state.articles.map(article => {
                        return (
                            <div className="article-wrapper">
                                
                                <img className="thumbnail" src={article.thumbnail}/>
                                <div>
                                    <Link className='article-list-title' to={`/article/${article.id}`}>{article.title}</Link>
                                    <div className='article-desc'>{article.description}</div>
                                </div>
                                
                            </div>
                        )
                    })}
                </div>
                
                <div className="howto-list">
                    <h2 className='title'>How To</h2>
                    {this.state.howtos.map(article => {
                        return (
                            
                            <div className="article-wrapper">
                                
                                <img className="thumbnail" src={article.thumbnail}/>
                                <div>
                                    <Link className='article-list-title' to={`/article/${article.id}`}>{article.title}</Link>
                                    <div className='article-desc'>{article.description}</div>
                                </div>
                                
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