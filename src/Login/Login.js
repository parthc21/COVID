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
import { Translation } from 'react-i18next';


class Login extends Component {
    
    static contextType=AuthContext
    
    render(){
        if(this.context.currentUser){
            return <Redirect to="/"/>
        }

        let displayObejct=""
        if(window.innerWidth< 600){
            displayObejct=" d-flex flex-column"
        }else{
            displayObejct=" d-flex justify-content-around"
        }
        console.log(this.props,'props>>>>>>>>>');
        return(
            <div>
                <Formik
                initialValues={{ id: 'parthc21@gmail.com', password:'123456789' }}
                onSubmit={(values, actions) => {
                    try{
                        app
                            .auth()
                            .signInWithEmailAndPassword(values.id,values.password)
                            .then(response=>{
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
                                    <Translation>
                                        {
                                            (t, { i18n }) => <h4>{t("Login.Login")}</h4>
                                        }
                                    </Translation>
                                    <Form.Label>
                                        <Translation>
                                            {
                                                (t, { i18n }) => <h6>{t("Login.EnterId")}</h6>
                                            }
                                        </Translation>
                                    </Form.Label>
                                    <Form.Control type="text" 
                                                placeholder="User ID" 
                                                id="id" 
                                                name="id" 
                                                onChange={props.handleChange} 
                                                onBlur={props.handleBlur} 
                                                value={props.values.id} />
                                    
                                    <Form.Label>
                                        <Translation>
                                            {
                                                (t, { i18n }) => <h6>{t("Login.Password")}</h6>
                                            }
                                        </Translation>
                                    </Form.Label>
                                    <Form.Control type="password" 
                                                placeholder="Password" 
                                                id="password" 
                                                name="password" 
                                                onChange={props.handleChange} 
                                                onBlur={props.handleBlur} 
                                                value={props.values.password} />
                                    
                                    {props.errors.name && <div id="feedback">{props.errors.name}</div>}

                                    <Button className={style.buttonStyle} type="submit" size="sm">
                                    <Translation>
                                            {
                                                (t, { i18n }) => <span>{t("Login.Login")}</span>
                                            }
                                        </Translation>
                                    </Button>
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