import React from 'react'
import {useTranslation} from 'react-i18next';
import styles from './Preview.module.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Signature from '../Signature/Signature'

function PreviewComp(props){
    const {t} =useTranslation();
    return(
        <div className={styles.previewBody}>
            <Jumbotron>
            
            <h4 className={styles.previewHeading+" d-flex justify-content-center"}>Consent For COVID19 Patient</h4>
            <p>I Have come to the hospital by myself as an emergency treatment during national lockdown.</p>
            <p>If i am subclinical or asymptomatic carrier or an undiagnosed patient with covid19. I fully understand it may endager doctors and hospital staff,so it is my
                reponsibility to take the appropriate precautions of safe distance, not to touch,wash hands, not to cough or sneeze unprotected and to follow the protocols
                prescribed for keeping away COVID19 by them.
            </p>
            <p>
                I also know that I may can get infection from the hospital or from a doctor and i will take every precautions to prevent this from happening at the same time,I 
                will not at all hold doctors and hospital staff accountable if such infections occurs to me or my accompanying attendants or persons
            </p>
            <p>
                The information provided by me below is true, complete and correct to the best of my knowledge and by clicking submit i agree to the above agreement
            </p>
            {
            props.questions.map((ques,index)=>(
                <div className={styles.previewQues}>
                    <h5>{index+1}. {t(`Question${index+1}.question`)}</h5>
                    <span className={styles.previewAns}>{t(`Question${index+1}.${ques.answer}`)}</span>
                </div>
            ))
            }
            <Signature/>
            <div className="d-flex justify-content-center">
                <Button variant="primary" onClick={props.onSubmitButton}>Submit</Button>
            </div>
            </Jumbotron>
        </div>
    )
}

export default PreviewComp