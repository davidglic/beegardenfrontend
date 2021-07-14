//module imports
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react';
import axios from 'axios';

//component imports
import Header from './components/Header'
import Footer from './components/Footer';
import MiniAbout from './components/abouts/MiniAbout';
import ArticlesList from './components/articles/ArticlesList';
import Article from './components/articles/Article';
import NewsContainer from './components/articles/NewsContainer';
import About from './components/abouts/About';
import LoginReg from './components/user/LoginReg'
import Profile from './components/user/Profile'
import Error from './components/Error';
import Verify from './components/user/Verify';
import Info from './components/user/Info'

const apiRoute = "http://localhost:8000/"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      userEmail: '',
      newsArticles: [],
      user: {},
      loggedIn: false,
      auth: ''
    }
  }

  updateUser = (user) => {
    //update user on login, or edit of profile info.
    this.setState({
      user: user,
      loggedIn: true,
    })
  }

  updateVerified = () => {
    //update email verification for user in state.
    const user = this.state.user
    user.verified = true
    this.setState({
      user
    })
  }

  handleLogout = () => {
    this.setState({
      user: {},
      loggedIn: false,
      auth: ''
    })
  }

 async componentDidMount() {
  //get and load news articles into state. They will then automatically populate.
  const newsItems = await axios.get(`${apiRoute}articles/news`)
   
  this.setState({
     newsArticles: newsItems.data
   })
  
  }

  render() {
    return (
      <div className="App">
        <Header loggedIn={this.state.loggedIn} handleLogout={this.handleLogout} />
        {/* Landing Route */}
        <Route 
          path="/"
          exact render={() =>
          <div>
            <MiniAbout />
            <NewsContainer newsArticles={this.state.newsArticles}/>
            
          </div>
          }
        />

        {/* Article List Route */}
        <Route
          path='/articles'
          render={() =>
          <div className="main-comp">
            <ArticlesList />
          </div>
          } />

        {/* About Route */}
          <Route 
            path='/about'
            render={() => <About className="main-comp" />}
          />

        {/* Article Route */}
        <Route 
          path='/article/:id'
          render={(props) =>
          <Article {...props}/>
          }
        />

        {/* Login/Register Route */}
        <Route
          path="/login"
          render={(props) => 
          <LoginReg updateUser={this.updateUser} loggedIn={this.state.loggedIn} user={this.state.user} {...props}/>
          }
        />
        
        {/* Profile Route */}
        <Route
          path="/profile"
          render={(props) => <Profile {...props} user={this.state.user} auth={this.state.auth} loggedIn={this.state.loggedIn} updateUser={this.updateUser} handleLogout={this.handleLogout}/>}
        />
        {/* Error */}
        <Route 
          path="/error"
          render={() => <Error />}
        />

        {/* Verify */}
        <Route 
          path="/verify"
          render={(props) => <Verify {...props} user={this.state.user} updateVerified={this.updateVerified}/>}
        />

        {/* Garden Info */}
        <Route 
          path="/info/:id"
          render={(props) => <Info {...props} loggedIn={this.state.loggedIn}/> }
        />

        <Footer />
      </div>
    );

  }
  
}

export default withRouter(App);


