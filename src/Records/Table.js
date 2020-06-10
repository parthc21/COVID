import React,{Component} from 'react';
import {AuthContext} from '../Auth';
import RecordTable from './Table/Records'
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import styles from './Table.module.css'

 
class UserTable extends Component {
  static contextType=AuthContext;
  constructor(props){
    super(props);
    this.dataComponent=React.createRef();
  }

  render() {
    return (
      <>
       <ReactToPrint
          trigger={() => <Button className={styles.printButton}>Print this out!</Button>}
          content={() => this.dataComponent.current}
        />
        <RecordTable ref={this.dataComponent}/>
      </>
    )
  }
};

export default UserTable;
 