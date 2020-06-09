import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styles from './Question.module.css'
import {useTranslation} from 'react-i18next';
import { useFormik} from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
    answer: Yup.string()
      .required('Required'),
  });
function Question(props){
    const {t} =useTranslation();

    const questions=[
        {
            question:"Have you returned from any of the countries listed on Coronavirus FAQs within the last 14 days?",
            answers:["Yes","No"]
        },
        {
            question:"Have you had close contact with or cared for someone diagnosed with COVID-19 within the last 14 days?",
            answers:["Yes","No"]
        },
        {
            question:"Have you travelled inter-state in last 1 month?",
            answers:["Yes","No"]
        },
        {
            question:"Are you experiencing any of these symptoms?",
            answers:["Fever","Cough","DifficultyInBreathe", "None"]
        },
        {
            question:"Are you a Smoker?",
            answers:["Yes","No"]
        },
    ]

    let buttonValue='';

    const formik= useFormik({
        initialValues:{
            question:'',
            answer:'',
        },
        validationSchema,
        onSubmit: values => {
            values.question=questions[props.indexOfQuestion].question;
            props.onClickingNext(values.question,values.answer);
        },
    })
    if(props.indexOfQuestion===0){
        buttonValue=<Button variant="primary" onClick={()=>formik.handleSubmit()}>Next</Button>
    }
    else{
        buttonValue=<>
                    <Button variant="primary" onClick={props.onClickingBack}>Back</Button>
                    <Button variant="primary" onClick={()=>formik.handleSubmit()}>Next</Button>
                    </>
    }
    return(
        <div className={styles.question}>
            <Form>
            <Form.Label as="legend" column className="d-flex justify-content-start">
                <h5>{props.indexOfQuestion+1}. {t(`Question${props.indexOfQuestion+1}.question`)} </h5>
            </Form.Label>
            <Form.Group as={Row}>
                <Col>
                {questions[props.indexOfQuestion].answers.map((answer,index1)=>(
                    <Form.Check
                        type="radio"
                        label={t(`Question${props.indexOfQuestion+1}.${answer}`)}
                        value={answer}
                        name="answer"
                        id={answer}
                        className="d-flex justify-content-start"
                        key={index1+questions[props.indexOfQuestion].question}
                        onChange={formik.handleChange}
                    />
                ))}
                </Col>
            </Form.Group>
            <div className="d-flex justify-content-between">
                {buttonValue}
            </div>
            </Form>
        </div>
    )
}

export default Question;