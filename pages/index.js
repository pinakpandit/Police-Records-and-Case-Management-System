import React, {Component} from 'react';

import {Button,Checkbox,Grid,Header,Icon,Image,Menu,Segment,Sidebar} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Layout from '../components/Layout';
import { Link } from "../routes";
class ClassCRMS extends Component{

  render(){
    return(
    <Layout>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        Police Station Record Management System
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/criminal/addCriminal`}>
      <a>
        <Icon name='user plus' />
        Add Criminal
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/criminal/showCriminal`}>
      <a>
        <Icon name='users' />
        View Criminal Data
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/FIR/addFIR`}>
      <a>
        <Icon name='write' />
        Register a FIR
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/FIR/showFIR`}>
      <a>
        <Icon name='book' />
        View Registered FIRs
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/SHR/addSHR`}>
      <a>
        <Icon name='edit' />
        Add Station House Report
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/SHR/showSHR`}>
      <a>
        <Icon name='file alternate outline' />
        View Station House Report
        </a>
        </Link>
      </Menu.Item>
      <Menu.Item as='a'>
      <Link route={`/stations/viewAllStations`}>
      <a>
        <Icon name='building outline' />
        All Station Transactional Data
        </a>
        </Link>
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Main Page</Header>
      </Segment>
    </Sidebar.Pusher>
    </Layout>
  );
  }
}




export default ClassCRMS;
