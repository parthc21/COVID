import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Questionaire.module.css';
import Question from './Question/Question';
import PreviewComp from './Preview/Preview'
import {PreviewEvent} from './Preview/PreviewEvent';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthContext} from '../Auth';

class Questionaire extends Component{
    static contextType=AuthContext;
    state={
        indexOfQuestion:0,
        preview:false,
        questions:[]
    }
    sigPad = {}
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
    onSubmitButton=()=>{
        toast.success('Entry Successfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        
        
        let val=this.context.currentUser.xa
        let objectData={
            currentToken:val,
            questions:this.state.questions
        }
        PreviewEvent.setquestionData(objectData);
    }
    onClickingBack=()=>{
        this.setState(prevState=>({
            indexOfQuestion:prevState.indexOfQuestion-1
        }));
    }
    
    render(){
        return(
            <>
            <ToastContainer />
            {this.state.preview?<>
            <ProgressBar now={(this.state.indexOfQuestion+1)*100/4} className={styles.questionaireBody}/>
            <Question indexOfQuestion={this.state.indexOfQuestion} onClickingNext={this.onClickingNext} onClickingBack={this.onClickingBack}/></>
            :<PreviewComp sigPad={this.sigPad} questions={this.state.questions} onSubmitButton={this.onSubmitButton}/>}
            </>
        )
    }
}

export default Questionaire;