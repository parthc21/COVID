import React from 'react';
import { Component } from 'react';
import { Formik } from 'formik';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import style from './Login.module.css'
import app from '../base';
import {withRouter, Redirect} from "react-router-dom";
import { AuthContext } from '../Auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
    
    static contextType=AuthContext
    
    render(){
        if(this.context.currentUser){
            return <Redirect to="/"/>
        }
        console.log(window.innerHeight, window.innerWidth,"<<<<<<<<<<<<<")

        let displayObejct=""
        if(window.innerWidth< 400){
            displayObejct=" d-flex flex-column"
        }else{
            displayObejct=" d-flex justify-content-around"
        }
        return(
            <div>
                <Formik
                initialValues={{ id: '', password:'' }}
                onSubmit={(values, actions) => {
                    try{
                        app
                            .auth()
                            .signInWithEmailAndPassword(values.id,values.password)
                            .then(response=>{
                                console.log(response);
                                this.props.history.push('/');
                            })
                            .catch(error=>{
                                toast.error('Contact Administrator!!', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                    });
                            })
                    } catch(error){
                    
                    }
                }}
                >
                {props => (
                    <div className={ 'd-flex justify-content-center'}>
                        <ToastContainer />
                        <Form className={style.loginForm}  onSubmit={props.handleSubmit}>
                            <Jumbotron fluid>
                            <div className={displayObejct}>
                                <img className={style.loginImage} alt="Logo"src={require("../Hand-holding-clipboard-with-ch_blog-768x403.jpg")}/>
                                <div className={style.loginContent}>
                                    <h4>Login</h4>
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
                            </Jumbotron>
                        </Form>
                    </div>
                )}
                </Formik>
            </div>
        )
    }
}

export default withRouter(Login)    