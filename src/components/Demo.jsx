import '../App.css';
import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import { ClipLoader } from 'react-spinners';
import DemoTable from './DemoTable';
import DataCard from './DataCard';
import InfoDialog  from './InfoDialog ';

const switchColumns = (type) => {
  switch(type) {
    case 'Computers':
      return [
                { title: 'Display Name', field: 'displayname'  },
                { title: 'OS', field: 'os' },
                { title: 'OS Version', field: 'osVersion' },
              ]
    case 'Users':
      return [
                { title: 'Display Name', field: 'displayname'  },
                { title: 'Email', field: 'email' },
                { title: 'Last Logon', field: 'lastLogon' },
              ]
    default:
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      computers: null,
      users: null,
      activeCard: null,
      columns: null,
      rowData: null,
      open: false,
    };
    this.loadDemoData = this.loadDemoData.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  componentDidMount() {
    let context = this;
    let getComputers = new Promise(function(resolve, reject) {
      fetch(`https://sb-backendapi.azurewebsites.net/api/Computers`)
        .then((res) => {
          if(res.status === 404 || !res) {reject('Resources do not exist')}
          resolve(res.json());
        }).catch((err) => console.error("Problem fetching computers:" + err));
    });

    let getUsers = new Promise(function(resolve, reject) {
      fetch(`https://sb-backendapi.azurewebsites.net/api/Users`)
        .then((res) => {
          if(res.status === 404 || !res) {reject('Resources do not exist')}
          resolve(res.json());
        }).catch((err) => console.error("Problem fetching users:" + err));
    });

    getComputers.then(function(computersData) {
      getUsers.then(function(usersData) {
        context.setState({
          computers: computersData,
          users: usersData
        })
      }).catch((err) => console.error(err));
    }).catch((err) => console.error(err));
  }

  onComputersClick() {
    this.setState({
      activeCard: "Computers",
      columns: switchColumns('Computers')
    });
  }

  onUsersClick() {
    this.setState({
      activeCard: "Users",
      columns:switchColumns('Users')
    });
  }

  loadDemoData(rowData) {
    this.setState({
      rowData: rowData,
      open: true,
    });
  }

  handleClose() {
    this.setState({
      open: false,
    });
  }

  render() {
    const { computers, users, activeCard, columns, rowData, open, validFetch } = this.state;
    let data, cards;
    if (activeCard === "Computers") {data = computers}
    if (activeCard === "Users") {data = users}
    if (computers && users) {
      cards = (
        <React.Fragment>
          <DataCard
            title="Computers"
            icon="computer"
            count={computers.length}
            onClick={(e)=>this.onComputersClick(e)}
          />
          <DataCard
            title="Users"
            icon="person"
            count={users.length}
            onClick={(e)=>this.onUsersClick(e)}
          />
        </React.Fragment>
      )} else {
        cards = (
          <ClipLoader
            sizeUnit="px"
            size={100}
            color="white"
            loading={!validFetch}
          />
      )}

    return (
      <React.Fragment>
        <Grid container spacing={2} justify="center">
          {cards}
        </Grid>
        { activeCard && (
          <DemoTable
            columns={columns}
            activeCard={activeCard}
            data={data}
            loadDemoData={this.loadDemoData}
          />
        )}
        { open && (
          <InfoDialog
            handleClose={this.handleClose}
            open={open}
            rowData={rowData}
          />
        )}
      </React.Fragment>
    )
  }
}

export default Demo;
