import React, { Component } from 'react';
import './App.css';
import Navbar from './Navigation/Navigation'
import DetailForm from './DetailForm/detailForm';
import Questionaire from './Questionaire/Questionaire'
import { detailEvent } from './DetailForm/detailFormEvent';

class App extends Component {

  state={
    hasUserSubmit:false
  }
  constructor(props){
    super(props);
    detailEvent.hasUserSubmitObs$
      .subscribe((state)=>{
        this.setState({
          hasUserSubmit:state
        });
      })
  }

  render(){
    let showModule = this.state.hasUserSubmit?<Questionaire/>:<DetailForm/>
    return (
      <div className="App">
        <Navbar hasUserSubmit={this.state.hasUserSubmit}></Navbar>
        {showModule}
      </div>
    );
  }
}

export default App;
