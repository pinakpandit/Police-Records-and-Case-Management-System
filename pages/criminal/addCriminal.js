import React, {Component} from 'react';
import Layout from '../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import {Form, Button, Input, TextArea, Message} from 'semantic-ui-react';
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';
import Crms from "../../ethereum/Crms";



class CriminalAdd extends Component{
  state = {
    name_of_criminal: "",
    dob:"",
    aadhar_no:"" ,
    PAN_no:"" ,
    family_details:"" ,
    address_details:"" ,
    crime_details:"" ,
    case_details:"",
    emergency_contact_no:"",
    misc:"",
    errorMessage:"",
    loading:false,
  };
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }

onSubmit = async (event) =>{
event.preventDefault();


const crms_1 = Crms(this.props.address);
this.setState({loading:true, errorMessage:''});
try{
const accounts = await web3.eth.getAccounts();
await crms_1.methods
.addCriminal(this.state.name_of_criminal,this.state.dob,this.state.aadhar_no,this.state.PAN_no,this.state.emergency_contact_no)
.send({
  from:accounts[0]});
await crms_1.methods
.addCriminalRecord(this.state.family_details,this.state.address_details,this.state.crime_details,this.state.case_details,this.state.misc)
.send({
  from:accounts[0]});
Router.pushRoute('/');
}catch(err){
  this.setState({ errorMessage: err.message });
}
this.setState({loading:false});
};

render(){
  return (
  <Layout>

<h3>Add Criminal Details</h3>
<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
<Form.Field>
<label>Name of the Criminal</label>
<Input focus
  value ={this.state.name_of_criminal}
  onChange={event=> this.setState({name_of_criminal: event.target.value})}
 />
</Form.Field>

<Form.Field>
<label>Date of Birth</label>
<Input focus
value ={this.state.dob}
onChange={event=> this.setState({dob: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Aadhar Number</label>
<Input focus
value ={this.state.aadhar_no}
onChange={event=> this.setState({aadhar_no: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>PAN Card Number</label>
<Input focus
value ={this.state.PAN_no}
onChange={event=> this.setState({PAN_no: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Family Details - Follow the format: (Father's Name(Age), Mother's Name(Age), Sibling Names(Respective Ages))</label>
<Input focus
value ={this.state.family_details}
onChange={event=> this.setState({family_details: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Address Details</label>
<Input focus
value ={this.state.address_details}
onChange={event=> this.setState({address_details: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Crime Details</label>
<Input focus
value ={this.state.crime_details}
onChange={event=> this.setState({crime_details: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Case Details</label>
<Input focus
value ={this.state.case_details}
onChange={event=> this.setState({case_details: event.target.value})}/>
</Form.Field>

<Form.Field>
<label>Emergency Contact Number</label>
<Input focus
value ={this.state.emergency_contact_no}
onChange={event=> this.setState({emergency_contact_no: event.target.value})}
/>
</Form.Field>

<Form.TextArea label='Other Information'
value ={this.state.misc}
onChange={event=> this.setState({misc: event.target.value})}
/>
<Message error header="Oops!" content={this.state.errorMessage} />
<Button loading={this.state.loading} primary>Add</Button>
</Form>


</Layout>
  );
}

}


export default CriminalAdd;
