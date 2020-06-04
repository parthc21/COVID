import React, { Component } from 'react';
import './App.css';
import Navbar from './Navigation/Navigation'
import DetailForm from './DetailForm/detailForm';
import Questionaire from './Questionaire/Questionaire'
import { detailEvent } from './DetailForm/detailFormEvent';
import Login from './Login/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  state={
    hasUserSubmit:false,
    userData:{}
  }
  constructor(props){
    super(props);
    detailEvent.hasUserSubmitObs$
      .subscribe((state)=>{
        this.setState({
          hasUserSubmit:state.submit,
          userData:state
        });
      })
  }

  render(){
    let showModule = this.state.hasUserSubmit?Questionaire:DetailForm;
    return (
      <AuthProvider>
      <Router>
      <div className="App">
        <Navbar hasUserSubmit={this.state.hasUserSubmit}></Navbar>
        <PrivateRoute exact path="/" component={showModule}/>
        <Route exact path="/login" component={Login}/>
      </div>
      </Router>
      </AuthProvider>
    );
  }
}

export default App;
