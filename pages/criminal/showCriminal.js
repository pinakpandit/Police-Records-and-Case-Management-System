import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Card, Grid, Button, Table } from "semantic-ui-react";
import crms from "../../ethereum/Crms";
import { Link } from "../../routes";
import RequestRow from "../../components/requestRow";





class ShowCriminal extends Component{
 static async getInitialProps(props) {
   const {address} = props.query;
   const crms_1 = crms(address);
   const rec_count = await crms_1.methods.returnCriminalRecordTableRowLength().call();


   const records = await Promise.all(
     Array(parseInt(rec_count))
     .fill()
     .map((element, index)=>{
       return crms_1.methods.criminalrecordstable(index).call();
     })
   );
    return {address, records, rec_count};
}
renderRows(){
  return this.props.records.map((record,index)=>{
    return(
      <RequestRow
      key = {index}
      id = {index}
      record = {record}
      address = {this.props.address}
      />
    );
  });
}
render(){
    const { Header, Row, HeaderCell, Body } = Table;
    return(
      <Layout>
      <h3>Criminal Records</h3>
      <Link route={`/criminal/addCriminal`}>
      <a><Button primary>Add Criminal</Button></a>
      </Link>
      <Table>
      <Header>
      <Row>
      <HeaderCell>ID</HeaderCell>
              <HeaderCell>Name of Criminal</HeaderCell>
              <HeaderCell>Date of Birth</HeaderCell>
              <HeaderCell>Aadhar Card Number</HeaderCell>
              <HeaderCell>PAN Card Number</HeaderCell>
              <HeaderCell>Emergency Contact Number</HeaderCell>
              <HeaderCell>View Criminal Data</HeaderCell>
              </Row>
              </Header>
              <Body>{this.renderRows()}</Body>
              </Table>
              </Layout>
    );
}

}

export default ShowCriminal;
