import React, {Component} from 'react';
import Layout from '../../../components/Layout';
import { Card, Grid, Button, Table } from "semantic-ui-react";
import crms from "../../../ethereum/Crms";
import { Link } from "../../../routes";
import RequestRow from "../../../components/requestRowKD";



class ShowKD extends Component{
 static async getInitialProps(props) {
   const {address} = props.query;
   const crms_4 = crms(address);
   const cnt = await crms_4.methods.returnKDLength().call();


   const KD_records = await Promise.all(
     Array(parseInt(cnt))
     .fill()
     .map((element, index)=>{
       return crms_4.methods.KnownDepredator(index).call();
     })
   );
    return {address, KD_records, cnt};
}
renderRows(){
  return this.props.KD_records.map((record_3,index)=>{
    return(
      <RequestRow
      key = {index}
      id = {index}
      record_3 = {record_3}
      address = {this.props.address}
      />
    );
  });
}
render(){
    const { Header, Row, HeaderCell, Body } = Table;
    return(
      <Layout>
      <h3>Known Depredators</h3>
      <Link route={`/StationDiary/KD/addKD`}>
      <a><Button primary>Add KD</Button></a>
      </Link>
      <Table>
      <Header>
      <Row>
      <HeaderCell>ID</HeaderCell>
              <HeaderCell>Name of the Known Depredator</HeaderCell>
              <HeaderCell>Aadhaar Number</HeaderCell>
              <HeaderCell>PAN Card Number</HeaderCell>
              <HeaderCell>Crime Details</HeaderCell>
              <HeaderCell>Case Details</HeaderCell>
              </Row>
              </Header>
              <Body>{this.renderRows()}</Body>
              </Table>
              </Layout>
    );
}

}

export default ShowKD;
