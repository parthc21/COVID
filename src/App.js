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
import axios from 'axios';
import { AuthContext } from './Auth';


class App extends Component {

  state={
    hasUserSubmit:false,
    userData:{},
    questionData:{}
  }
  static contextType=AuthContext

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
    setTimeout(
      ()=>{
        let objectData = {...this.state.userData,...this.state.questionData};
        console.log(objectData,'Object Data>>>>>>>>>>>>>>')
        axios.post(`https://covid-8d474.firebaseio.com/userdata.json`,objectData)
          .then(response=>{
            console.log(response);
            this.setState({
              hasUserSubmit:false
            });
        })
        .catch(response=>{
            console.log(response);
        });
      },
      5000
    )
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
