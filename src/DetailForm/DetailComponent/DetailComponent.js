import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../detailForm.module.css';
import { useTranslation } from 'react-i18next';
import { useFormik} from 'formik';
import {detailEvent} from '../detailFormEvent';

function DetailComp(props){
    const {t}= useTranslation();

    const formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            gender:'',
            temperature:'',
            address:'',
            state:'',
            district:'',
            village:''
        },
        onSubmit: values => {
            detailEvent.sethasUserSubmit(true);
        },
    })
    return (
        <Form className={styles.detailForm} onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>{t('DetailForm.FName')}</Form.Label>
                        <Form.Control id="firstName" name="firstName" type="text" placeholder={t('DetailForm.FName')} onChange={formik.handleChange} value={formik.values.firstName}/>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.LName')}</Form.Label>
                    <Form.Control type="text" id="lastName" name="lastName" placeholder={t('DetailForm.LName')} onChange={formik.handleChange} value={formik.values.lastName}/>
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Gender')}</Form.Label>
                    <Form.Control id="gender" name="gender" as="select" onChange={formik.handleChange} value={formik.values.gender}>
                        <option>Choose...</option>
                        <option>{t('DetailForm.Male')}</option>
                        <option>{t('DetailForm.Female')}</option>
                        <option>{t('DetailForm.Other')}</option>
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Temperature')}</Form.Label>
                    <Form.Control id="temperature" name="temperature" type="text" placeholder={t('DetailForm.Temperature')} onChange={formik.handleChange} value={formik.values.temperature}/>
                    </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Form.Label>{t('DetailForm.Address')}</Form.Label>
                    <Form.Control id="address" name="address" placeholder="1234 Main St" onChange={formik.handleChange} value={formik.values.address} />
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.State')}</Form.Label>
                    <Form.Control id="state" name="state" as="select" 
                                onChange={value=>{
                                                    props.getSelectedState(value);
                                                    formik.handleChange(value);
                                                }} 
                                value={formik.values.state}>
                        <option>Choose...</option>
                        {props.stateData}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.District')}</Form.Label>
                    <Form.Control id="district" name="district" as="select" onChange={formik.handleChange} value={formik.values.district}>
                        <option>Choose...</option>
                        {props.districtDisplay}
                    </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Village')}</Form.Label>
                    <Form.Control id="village" name="village" type="text" placeholder="Town/Village" onChange={formik.handleChange} value={formik.values.village}/>
                    </Form.Group>
                </Form.Row>

                <Button className={styles.detailFormButton} type="submit"variant="primary">
                    Submit
                </Button>
            </Form>
    )
}

export default DetailComp;