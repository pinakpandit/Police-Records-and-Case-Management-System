import React, {Component} from 'react';
import Layout from '../../components/Layout';
import { Card, Grid, Button, Table } from "semantic-ui-react";
import crms from "../../ethereum/Crms";
import { Link } from "../../routes";
import RequestRow from "../../components/requestRowSHR";

class ShowSHR extends Component{
  static async getInitialProps(props) {
    const {address} = props.query;
    const crms_3 = crms(address);
    const SHR_count = await crms_3.methods.returnSHRLength().call();


    const SHRrecords = await Promise.all(
      Array(parseInt(SHR_count))
      .fill()
      .map((element, index)=>{
        return crms_3.methods.StationHouseReport(index).call();
      })
    );
     return {address, SHRrecords, SHR_count};
   }
   renderRows(){
   return this.props.SHRrecords.map((record_2,index)=>{
     return(
       <RequestRow
       key = {index}
       id = {index}
       record_2 = {record_2}
       address = {this.props.address}
       />
     );
   });
   }
   render(){
     const { Header, Row, HeaderCell, Body } = Table;
     return(
       <Layout>
       <h3>Station House Report Records</h3>
       <Link route={`/SHR/addSHR`}>
       <a><Button primary>Add SHR</Button></a>
       </Link>
       <Table>
       <Header>
       <Row>
       <HeaderCell>ID</HeaderCell>
               <HeaderCell>Name of the Reporter</HeaderCell>
               <HeaderCell>Substance of the Report</HeaderCell>
               </Row>
               </Header>
               <Body>{this.renderRows()}</Body>
               </Table>
               </Layout>
     );
   }
}
export default ShowSHR;
