import React from 'react'
import { Component } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import style from './SignUp.module.css'
import app from '../base';

class SignUp extends Component {
    render(){
        return(
            <div>
                <Formik
                initialValues={{ id: '', password:'' }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    try{
                        app
                            .auth()
                            .createUserWithEmailAndPassword(values.id,values.password);
                            console.log("Logged in");
                    } catch(error){
                        alert(error);
                    }
                }}
                >
                {props => (
                    <div className={ 'd-flex justify-content-center'}>
                        <Form className={style.loginForm}  onSubmit={props.handleSubmit}>
                            <div className="d-flex justify-content-around">
                                <img  alt="Logo"src={require("../logo.svg")}/>
                                <div className={style.loginContent}>
                                    <h4>Register</h4>
                                    <Form.Label>
                                        Please enter a User Id
                                    </Form.Label>
                                    <Form.Control type="text" 
                                                placeholder="User ID" 
                                                id="id" 
                                                name="id" 
                                                onChange={props.handleChange} 
                                                onBlur={props.handleBlur} 
                                                value={props.values.id} />
                                    
                                    <Form.Label>
                                        Enter the password
                                    </Form.Label>
                                    <Form.Control type="password" 
                                                placeholder="Password" 
                                                id="password" 
                                                name="password" 
                                                onChange={props.handleChange} 
                                                onBlur={props.handleBlur} 
                                                value={props.values.password} />
                                    
                                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}

                                    <Button className={style.buttonStyle} type="submit" size="sm">Login</Button>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
                </Formik>
            </div>
        )
    }
}

export default SignUp