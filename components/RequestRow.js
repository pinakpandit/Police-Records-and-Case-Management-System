import React, { Component } from "react";
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import {Link} from '../routes';

class RequestRow extends Component {
  render() {
    const {Row, Cell} = Table;
    const {id, record} = this.props;

    return(
      <Row>
      <Cell>{id}</Cell>
      <Cell>{record.name_of_criminal}</Cell>
      <Cell>{record.dob}</Cell>
      <Cell>{record.aadhar_no}</Cell>
      <Cell>{record.PAN_no}</Cell>
      <Cell>{record.emergency_contact_no}</Cell>
    
      </Row>

    );
  }
}

export default RequestRow;
