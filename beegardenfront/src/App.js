import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react';

//import components here
import Header from './components/Header'
import Footer from './components/Footer';
import MiniAbout from './components/abouts/MiniAbout';
import ArticlesList from './components/articles/ArticlesList';
import NewsContainer from './components/articles/NewsContainer';
import axios from 'axios';
// import Footer from './components/Footer'

const apiRoute = "http://localhost:8000/articles"
//http://localhost:8000/articles/howto/?format=json

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      newsArticles: []
    }
  }

 async componentDidMount() {
   const newsItems = await axios.get(`${apiRoute}/news`)
   console.log(newsItems.data)
   this.setState({
     newsArticles: newsItems.data
   })
  }

  render() {
    return (
      <div className="App">
        <Route 
          path="/"
          exact render={() =>
          <div>
            <Header />
            <MiniAbout />
            <NewsContainer newsArticles={this.state.newsArticles}/>
            <Footer />
          </div>
          }
        />
      </div>
    );

  }
  
}

export default withRouter(App);


// <Route
//           path="/"
//           exact render={() => 
//           <div> 
//           <Landing searchDrinks={this.searchDrinks}/>
//           <DrinkStream drinkList={this.state.drinkList}/> 
//           </div> 
//         }
//         />