import React, { Component } from "react";
import { Table } from 'semantic-ui-react';
import web3 from '../ethereum/web3'
import {Link} from '../routes';

class RequestRowSHR extends Component {
  render() {
    const {Row, Cell} = Table;
    const {id, record_2} = this.props;

    return(
      <Row>
      <Cell>{id}</Cell>
      <Cell>{record_2.name_of_reporter}</Cell>
      <Cell>{record_2.substance_of_report}</Cell>
      </Row>

    );
  }
}

export default RequestRowSHR;
