import React from 'react'
import {useTranslation} from 'react-i18next';
import styles from './Preview.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';

function PreviewComp(props){
    console.log(props.questions);
    const {t} =useTranslation();
    return(
        <div className={styles.previewBody}>
            <Jumbotron>
            <h4 className={styles.previewHeading+" d-flex justify-content-center"}>Preview Screen</h4>
            {
            props.questions.map((ques,index)=>(
                <div className={styles.previewQues}>
                    <h5>{index+1}. {t(`Question${index+1}.question`)}</h5>
                    <span className={styles.previewAns}>{t(`Question${index+1}.${ques.answer}`)}</span>
                </div>
            ))
            }
            </Jumbotron>
        </div>
    )
}

export default PreviewComp