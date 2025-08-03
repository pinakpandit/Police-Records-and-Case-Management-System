import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Card, Grid, Button, Table } from "semantic-ui-react";
import crms from "../../ethereum/Crms";
import { Link } from "../../routes";
import RequestRow from "../../components/requestRowFIR";


class ShowFIR extends Component{
  static async getInitialProps(props) {
    const {address} = props.query;
    const crms_2 = crms(address);
    const FIR_count = await crms_2.methods.returnFIRLength().call();


    const FIRrecords = await Promise.all(
      Array(parseInt(FIR_count))
      .fill()
      .map((element, index)=>{
        return crms_2.methods.fir_record(index).call();
      })
    );
     return {address, FIRrecords, FIR_count};
   }
   renderRows(){
   return this.props.FIRrecords.map((record_1,index)=>{
     return(
       <RequestRow
       key = {index}
       id = {index}
       record_1 = {record_1}
       address = {this.props.address}
       />
     );
   });
   }
   render(){
     const { Header, Row, HeaderCell, Body } = Table;
     return(
       <Layout>
       <h3>FIR Records</h3>
       <Link route={`/FIR/addFIR`}>
       <a><Button primary>Add FIR</Button></a>
       </Link>
       <Table>
       <Header>
       <Row>
       <HeaderCell>ID</HeaderCell>
               <HeaderCell>Date & Time of the event</HeaderCell>
               <HeaderCell>Complainant information</HeaderCell>
               <HeaderCell>Place where the crime took place</HeaderCell>
               <HeaderCell>Incident Details</HeaderCell>
               <HeaderCell>Additional description</HeaderCell>
               </Row>
               </Header>
               <Body>{this.renderRows()}</Body>
               </Table>
               </Layout>
     );
   }
}
export default ShowFIR;
