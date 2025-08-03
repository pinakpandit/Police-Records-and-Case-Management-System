import React, { Component } from "react";
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import {Link} from '../routes';

class RequestRowFIR extends Component {
  render() {
    const {Row, Cell} = Table;
    const {id, record_3} = this.props;

    return(
      <Row>
      <Cell>{id}</Cell>
      <Cell>{record_3.name_of_KD}</Cell>
      <Cell>{record_3.aadhar}</Cell>
      <Cell>{record_3.PAN}</Cell>
      <Cell>{record_3.crimedetails}</Cell>
      <Cell>{record_3.casedetails}</Cell>

      </Row>

    );
  }
}

export default RequestRowFIR;
