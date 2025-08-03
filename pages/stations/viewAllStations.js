import React, { Component } from "react";
import { Card, Button } from "semantic-ui-react";
import StationFactory from "../../ethereum/StationFactory";
import Layout from "../../components/Layout";
import { Link } from "../../routes";

class StationIndex extends Component {
  static async getInitialProps() {
    const stations = await StationFactory.methods.getDeployedStations().call();

    return { stations };
  }
  renderStations() {
    const items = this.props.stations.map((address) => {
      return {
        header: address,
        description: (
          <Link route={`/stations/${address}`}>
            <a>View Station</a>
          </Link>
        ),
        fluid: true,
      };
    });
    return <Card.Group items={items} />;
  }
  render() {
    return (
      <Layout>
        <div>
          <h3>Total Stations</h3>
          <Link route="/stations/new">
            <a>
              <Button
                floated="right"
                content="Create Station"
                icon="add circle"
                primary
              />
            </a>
          </Link>
          {this.renderStations()}
        </div>
      </Layout>
    );
  }
}

export default StationIndex;
