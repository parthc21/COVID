import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Questionaire.module.css';
import Question from './Question/Question';
import PreviewComp from './Preview/Preview'

class Questionaire extends Component{
    state={
        indexOfQuestion:0,
        preview:false,
        questions:[]
    }
    onClickingNext=(question,answer)=>{
        let tques=[...this.state.questions];
        let newVar={
            question:question,
            answer:answer
        }
        tques.push(newVar);
        this.setState({
            questions:tques
        })
        if(this.state.indexOfQuestion<=2){
            this.setState(prevState=>({
                indexOfQuestion:prevState.indexOfQuestion+1
            }));
        }
        else{
            this.setState({
                preview:true
            });
        }

    }
    onClickingBack=()=>{
        this.setState(prevState=>({
            indexOfQuestion:prevState.indexOfQuestion-1
        }));
    }
    
    render(){
        return(
            <>
            {!this.state.preview?<>
            <ProgressBar now={(this.state.indexOfQuestion+1)*100/4} className={styles.questionaireBody}/>
            <Question indexOfQuestion={this.state.indexOfQuestion} onClickingNext={this.onClickingNext} onClickingBack={this.onClickingBack}/></>
            :<PreviewComp questions={this.state.questions}/>}
            </>
        )
    }
}

export default Questionaire;