import React from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styles from '../detailForm.module.css';
import { useTranslation } from 'react-i18next';
import { useFormik} from 'formik';
import {detailEvent} from '../detailFormEvent';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    gender: Yup.string()
      .required('Required'),
    temperature: Yup.string()
      .required('Required'),
    address: Yup.string()
      .required('Required'),
    state: Yup.string()
      .required('Required'),
    district: Yup.string()
      .required('Required'),
    village: Yup.string()
      .required('Required'),
  });

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
        validationSchema,
        onSubmit: values => {
            values.submit=true;
            detailEvent.sethasUserSubmit(values);
        },
    })
    return (
        <Form className={styles.detailForm} onSubmit={formik.handleSubmit}>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>{t('DetailForm.FName')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                        <Form.Control id="firstName" name="firstName" type="text" placeholder={t('DetailForm.FName')} onChange={formik.handleChange} value={formik.values.firstName}/>
                        {formik.errors.firstName && formik.touched.firstName ? (
                            <div className={styles.validationError}>{formik.errors.firstName}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.LName')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control type="text" id="lastName" name="lastName" placeholder={t('DetailForm.LName')} onChange={formik.handleChange} value={formik.values.lastName}/>
                    {formik.errors.lastName && formik.touched.lastName ? (
                            <div className={styles.validationError}>{formik.errors.lastName}</div>
                        ) : null}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Gender')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="gender" name="gender" as="select" onChange={formik.handleChange} value={formik.values.gender}>
                        <option>Choose...</option>
                        <option>{t('DetailForm.Male')}</option>
                        <option>{t('DetailForm.Female')}</option>
                        <option>{t('DetailForm.Other')}</option>
                    </Form.Control>
                    {formik.errors.gender && formik.touched.gender ? (
                            <div className={styles.validationError}>{formik.errors.gender}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Temperature')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="temperature" name="temperature" type="number" placeholder={t('DetailForm.Temperature')} onChange={formik.handleChange} value={formik.values.temperature}/>
                    {formik.errors.temperature && formik.touched.temperature ? (
                            <div className={styles.validationError}>{formik.errors.temperature}</div>
                        ) : null}
                    </Form.Group>
                </Form.Row>

                <Form.Group >
                    <Form.Label>{t('DetailForm.Address')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="address" name="address" placeholder="1234 Main St" onChange={formik.handleChange} value={formik.values.address} />
                    {formik.errors.address && formik.touched.address ? (
                            <div className={styles.validationError}>{formik.errors.address}</div>
                        ) : null}
                </Form.Group>

                <Form.Row>
                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.State')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="state" name="state" as="select" 
                                onChange={value=>{
                                                    props.getSelectedState(value);
                                                    formik.handleChange(value);
                                                }} 
                                value={formik.values.state}>
                        <option>Choose...</option>
                        {props.stateData}
                    </Form.Control>
                    {formik.errors.state && formik.touched.state ? (
                            <div className={styles.validationError}>{formik.errors.state}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.District')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="district" name="district" as="select" onChange={formik.handleChange} value={formik.values.district}>
                        <option>Choose...</option>
                        {props.districtDisplay}
                    </Form.Control>
                    {formik.errors.district && formik.touched.district ? (
                            <div className={styles.validationError}>{formik.errors.district}</div>
                        ) : null}
                    </Form.Group>

                    <Form.Group as={Col}>
                    <Form.Label>{t('DetailForm.Village')}<span className={styles.validationAsterisk}> *</span></Form.Label>
                    <Form.Control id="village" name="village" type="text" placeholder="Town/Village" onChange={formik.handleChange} value={formik.values.village}/>
                    {formik.errors.village && formik.touched.village ? (
                            <div className={styles.validationError}>{formik.errors.village}</div>
                        ) : null}
                    </Form.Group>
                </Form.Row>
                <div className=" d-flex justify-content-center">
                    <Button className={styles.detailFormButton} type="submit"variant="primary">
                        Submit
                    </Button>
                </div>
            </Form>
    )
}

export default DetailComp;