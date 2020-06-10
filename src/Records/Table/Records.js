import React,{Component} from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import {AuthContext} from '../../Auth';
import styles from '../Table.module.css';

const columns = [
  {
    name: 'First Name',
    selector: 'firstName',
    sortable: true,
  },
  {
    name: 'Last Name',
    selector: 'lastName',
    sortable: true,
  },
  {
    name: 'Age',
    selector: 'age',
    sortable: true,
  },
  {
    name: 'Gender',
    selector: 'gender',
    sortable: true,
  },
  {
    name: 'District',
    selector: 'district',
    sortable: true,
  },
];
 
class RecordsTable extends Component {
  static contextType=AuthContext;

  constructor(props){
    super(props);
    this.dataComponent=React.createRef();
  }
  state={
    userData:[]
  }
  componentDidMount(){
    let currentToken=this.context.currentUser.xa
    axios.get(`https://covid-8d474.firebaseio.com/userdata.json?auth=${currentToken}`)
      .then(response=>{
        this.setState({
          userData:Object.values(response.data)
        })
      })
  }

  onPrintClick(){
    let printContents=document.getElementById('patient-table-content').innerHTML;
    console.log(printContents)
    let originalContent=document.body.innerHTML;
    console.log(originalContent)
    document.body.innerHTML=printContents;
    window.print();
    document.body.innerHTML=originalContent;
  }
  render() {
    return (
      <>
       <div id="patient-table-content"className={styles.tableContainer}>
        <DataTable
            title="Patients Record"
            columns={columns}
            data={this.state.userData}
            ref={el => (this.dataComponent = el)}
        />
      </div>
      </>
    )
  }
};

export default RecordsTable;