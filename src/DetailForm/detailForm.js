import React, { Component } from 'react';
import states from '../States/states.json';
import { detailEvent } from './detailFormEvent';
import DetailComp from './DetailComponent/DetailComponent';


class detailForm extends Component {
    
    state={
        selectedState:'',
        selectedDistricts:'',
        districtDisplay:[],
        selectedGender:''
    }
    componentWillMount(){
    }

    getSelectedState=(value)=>{
        const stateValue= value.target.value
        this.setState({
            selectedState:value.target.value
        });
        const districtData= states.states.filter(state => (state.name===stateValue))[0].districts.map(district=>{
            return(
            <option key={district.id} value={district.name}>{district.name}</option>
            )
        });
        this.setState({
            districtDisplay:districtData
        })
        console.log(districtData,'district data');
    }

    getSelectedGender=(value)=>{
        const genderValue = value.target.value;
        this.setState({
            selectedGender:genderValue
        });
        console.log(this.state.selectedGender);
    }

    onClickSubmit=()=>{
        detailEvent.sethasUserSubmit(true);
    }

    render(){

        const stateData =states.states.map(state=>{
                return(
                <option key={state.id} value={state.name}>{state.name}</option>
                )
            }) 
        return(
            <DetailComp stateData={stateData}
                        onClickSubmit={this.onClickSubmit}
                        getSelectedGender={this.getSelectedGender}
                        getSelectedState={this.getSelectedState}
                        districtDisplay={this.state.districtDisplay}
                        selectedDistricts={this.state.selectedDistricts}
                        selectedState={this.state.selectedState}/>
        )
    }
}

export default detailForm;