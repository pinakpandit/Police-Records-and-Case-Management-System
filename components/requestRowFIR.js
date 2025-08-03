import React, { Component } from "react";
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import {Link} from '../routes';

class RequestRowFIR extends Component {
  render() {
    const {Row, Cell} = Table;
    const {id, record_1} = this.props;

    return(
      <Row>
      <Cell>{id}</Cell>
      <Cell>{record_1.datetime}</Cell>
      <Cell>{record_1.complainant_info}</Cell>
      <Cell>{record_1.place}</Cell>
      <Cell>{record_1.incident_details}</Cell>
      <Cell>{record_1.desc}</Cell>

      </Row>

    );
  }
}

export default RequestRowFIR;
