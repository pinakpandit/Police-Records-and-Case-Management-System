import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import {Form, Button, Input, TextArea, Message} from 'semantic-ui-react';
import web3 from "../../../ethereum/web3";
import {Router} from '../../../routes';
import Crms from "../../../ethereum/Crms";



class KDAdd extends Component{
  state = {
    name_of_KD: "",
    aadhar:"",
    PAN:"" ,
    crimedetails:"" ,
    casedetails:"" ,
    errorMessage:"",
    loading:false,
  };
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }

onSubmit = async (event) =>{
event.preventDefault();


const crms_4 = Crms(this.props.address);
this.setState({loading:true, errorMessage:''});
try{
const accounts = await web3.eth.getAccounts();
await crms_4.methods
.add_KD(this.state.name_of_KD,this.state.aadhar,this.state.PAN,this.state.crimedetails,this.state.casedetails)
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
<label>Name of the Known Depredator</label>
<Input focus
  value ={this.state.name_of_KD}
  onChange={event=> this.setState({name_of_KD: event.target.value})}
 />
</Form.Field>

<Form.Field>
<label>Aadhaar Number</label>
<Input focus
value ={this.state.aadhar}
onChange={event=> this.setState({aadhar: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>PAN Card Number</label>
<Input focus
value ={this.state.PAN}
onChange={event=> this.setState({PAN: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Crime Details</label>
<Input focus
value ={this.state.crimedetails}
onChange={event=> this.setState({crimedetails: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Case Details</label>
<Input focus
value ={this.state.casedetails}
onChange={event=> this.setState({casedetails: event.target.value})}
/>
</Form.Field>

<Message error header="Oops!" content={this.state.errorMessage} />
<Button loading={this.state.loading} primary>Add</Button>
</Form>


</Layout>
  );
}

}


export default KDAdd;
