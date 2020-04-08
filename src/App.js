import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Router Components/Home'
import FinalPost from './components/Router Components/FinalPost'
import NewPost from './components/Router Components/NewPost'



// import 'https://cdnjs.com/libraries/marked'

import './App.css';




class App extends Component {


  render() {


    return (
     <div className='container'>
       <Router>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/NewPost/:NumOfPosts' component={NewPost}/>

            <Route exact path='/posts/:postId' component={FinalPost}/>

           
          </Switch>

       </Router>
     </div>
    )
  }
}

export default App
