import React, {Component} from 'react';
import Layout from '../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import {Form, Button, Input, TextArea, Message} from 'semantic-ui-react';
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';
import Crms from "../../ethereum/Crms";



class FIRadd extends Component{
  state = {
    datetime: "",
    complainant_info:"",
    place:"" ,
    incident_details:"" ,
    desc:"" ,
    errorMessage:"",
    loading:false,
  };
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }


onSubmit = async (event) =>{
  event.preventDefault();
  const crms_2 = Crms(this.props.address);

  this.setState({loading:true, errorMessage:''});
  try{
  const accounts = await web3.eth.getAccounts();
  await crms_2.methods
  .addFIR(this.state.datetime,this.state.complainant_info,this.state.place,this.state.incident_details,this.state.desc)
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

<h3>Add FIR Details</h3>
<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
<Form.Field>
<label>Date & Time of the event</label>
<Input focus
  value ={this.state.datetime}
  onChange={event=> this.setState({datetime: event.target.value})}
 />
</Form.Field>

<Form.Field>
<label>Complainant information</label>
<Input focus
value ={this.state.complainant_info}
onChange={event=> this.setState({complainant_info: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Place where the crime took place</label>
<Input focus
value ={this.state.place}
onChange={event=> this.setState({place: event.target.value})}
/>
</Form.Field>

<Form.Field>
<label>Incident Details</label>
<Input focus
value ={this.state.incident_details}
onChange={event=> this.setState({incident_details: event.target.value})}
/>
</Form.Field>

<Form.TextArea label='Additional description'
value ={this.state.desc}
onChange={event=> this.setState({desc: event.target.value})}
/>
<Message error header="Oops!" content={this.state.errorMessage} />
<Button loading={this.state.loading} primary>Add</Button>
</Form>


</Layout>
  );
}
}
export default FIRadd;
