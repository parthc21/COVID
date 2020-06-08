import React, { Component } from 'react';
import SignaturePad from 'react-signature-canvas';
import styles from './Signature.module.css'

class Signature extends Component{
    sigPad={}
    render(){
        return(
            <div className={styles.sigContainer}>
                <SignaturePad canvasProps={{height:200,width:400,className:styles.sigPad}} ref={(ref) => { this.sigPad = ref }} />
            </div>
        )
    }
}

export default Signature