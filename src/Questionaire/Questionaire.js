import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import styles from './Questionaire.module.css';
import Question from './Question/Question'

class Questionaire extends Component{
    state={
        indexOfQuestion:0
    }
    onClickingNext=()=>{
        this.setState(prevState=>({
            indexOfQuestion:prevState.indexOfQuestion++
        }));
        console.log(this.state.indexOfQuestion,'index of question');
    }
    onClickingBack=()=>{
        if(this.state.indexOfQuestion>0){
            this.setState(prevState=>({
                indexOfQuestion:prevState.indexOfQuestion--
            }));
        }
    }
    render(){
        return(
            <>
            <ProgressBar now={(this.state.indexOfQuestion+1)*100/4} className={styles.questionaireBody}/>
            <Question indexOfQuestion={this.state.indexOfQuestion} onClickingNext={this.onClickingNext}/>
            </>
        )
    }
}

export default Questionaire;