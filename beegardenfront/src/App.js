import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react';

//import components here
import Header from './components/Header'
import Footer from './components/Footer';
import MiniAbout from './components/abouts/MiniAbout';
import ArticlesList from './components/articles/ArticlesList';
// import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props)
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
            <ArticlesList />
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