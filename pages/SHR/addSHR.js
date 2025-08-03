import React, {Component} from 'react';
import Layout from '../../components/Layout';
import 'semantic-ui-css/semantic.min.css';
import {Form, Button, Input, TextArea, Message} from 'semantic-ui-react';
import web3 from "../../ethereum/web3";
import {Router} from '../../routes';
import Crms from "../../ethereum/Crms";



class SHRadd extends Component{
  state = {
    name_of_reporter: "",
    substance_of_report:"",
    errorMessage:"",
    loading:false,
  };
  static async getInitialProps(props){
    const {address} = props.query;
    return {address};
  }


onSubmit = async (event) =>{
  event.preventDefault();
  const crms_3 = Crms(this.props.address);

  this.setState({loading:true, errorMessage:''});
  try{
  const accounts = await web3.eth.getAccounts();
  await crms_3.methods
  .add_SHR(this.state.name_of_reporter,this.state.substance_of_report)
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

<h3>Add Station House Report</h3>
<Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
<Form.Field>
<label>Name of the Event Reporter</label>
<Input focus
  value ={this.state.name_of_reporter}
  onChange={event=> this.setState({name_of_reporter: event.target.value})}
 />
</Form.Field>

<Form.TextArea label='Substance of the Report'
value ={this.state.substance_of_report}
onChange={event=> this.setState({substance_of_report: event.target.value})}
/>
<Message error header="Oops!" content={this.state.errorMessage} />
<Button loading={this.state.loading} primary>Add</Button>
</Form>


</Layout>
  );
}
}
export default SHRadd;
