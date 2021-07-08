import logo from './logo.svg';
import './App.css';
import {Route, Link, withRouter} from 'react-router-dom'
import React, {Component} from 'react';
import axios from 'axios';

//import components here
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
// import Footer from './components/Footer'

const apiRoute = "http://localhost:8000/"
//http://localhost:8000/articles/howto/?format=json

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
    console.log("update user")
    this.setState({
      user: user,
      loggedIn: true,
    })
  }

  updateAuth = (auth) => {
    this.setState({
      auth
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
   const newsItems = await axios.get(`${apiRoute}articles/news`)
   
   this.setState({
     newsArticles: newsItems.data
   })
  //  const logintest = await axios.put(`${apiRoute}login/`, {email: 'test@test.com', password: "bee"})
  //  console.log(logintest)
  //  const updatetest = await axios.post(`${apiRoute}update/`, {email: 'test@test.com', password: "bee", object: 'gardenarea', new:12})
  //  console.log(updatetest)
  //  const deleteTest = await axios.delete(`${apiRoute}update/`, {data: {email: 'this@this.com', password: "bee"}})
  //  console.log(deleteTest)
  // const newAccount = {email: 'new@new.comb', zipcode: 99205, gardenarea: 15, newsletter: true, password: 'bee'}
  // const createTest = await axios.post(`${apiRoute}create/`, newAccount)
  //  console.log(createTest.data)
  
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
          <LoginReg updateUser={this.updateUser} updateAuth={this.updateAuth} loggedIn={this.state.loggedIn} {...props}/>
          }
        />
        
        {/* Profile Route */}
        <Route
          path="/profile"
          render={(props) => <Profile {...props} user={this.state.user} auth={this.state.auth} loggedIn={this.state.loggedIn} updateUser={this.updateUser} updateAuth={this.updateAuth}/>}
        />
        {/* Error */}
        <Route 
          path="/error"
          render={() => <Error />}
        />

        <Footer />
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