import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navigation.module.css';
import Button from 'react-bootstrap/Button';
import {useTranslation} from 'react-i18next';
import {detailEvent} from '../DetailForm/detailFormEvent'

function CustomNavbar(props){

  const { t, i18n } = useTranslation();

  function handleClick(lang){
    i18n.changeLanguage(lang);
  }

  function goBackHome(){
    detailEvent.sethasUserSubmit(false);
  }

  return(
      <>
        <Navbar className={styles.navbarColor+' d-flex justify-content-between'} variant="light">
          <Navbar.Brand>
            <img
              alt=""
              src={require("../symbol.png")}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            {t('Heading.covid')}
          </Navbar.Brand>
        <div>
          {props.hasUserSubmit?<Button className={styles.navbarButton} onClick={()=>goBackHome()}>Home</Button>:''}
          <Button className={styles.navbarButton} onClick={()=>handleClick('en')}>
            English
          </Button>
          <Button className={styles.navbarButton} onClick={()=>handleClick('hi')}>
            Hindi
          </Button>
        </div>
        </Navbar>
        <Navbar className="d-flex justify-content-center" variant="dark" bg="light" fixed="bottom">
          Copyright © 2020
        </Navbar>
      </>
  )
}

export default CustomNavbar;