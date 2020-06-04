import React, { Component } from 'react';
import './App.css';
import Navbar from './Navigation/Navigation'
import DetailForm from './DetailForm/detailForm';
import Questionaire from './Questionaire/Questionaire'
import { detailEvent } from './DetailForm/detailFormEvent';
import { PreviewEvent} from './Questionaire/Preview/PreviewEvent'
import Login from './Login/Login';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {AuthProvider} from './Auth';
import PrivateRoute from './PrivateRoute';

class App extends Component {

  state={
    hasUserSubmit:false,
    userData:{},
    questionData:{}
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
      PreviewEvent.questionDataObs$
      .subscribe((state)=>{
        this.setState({
          questionData:state
        });
        this.sendDataToFireBase();
      })
  }

  sendDataToFireBase=()=>{
    console.log('Firebase Data>>>>>>>>>>');
    console.log(this.state.userData);
    console.log(this.state.questionData)
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
