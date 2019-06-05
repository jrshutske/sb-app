import '../App.css';
import React, { Component } from "react";
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';

class DemoTable extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    };
    this.onRowClick = this.onRowClick.bind(this);
  }

  onRowClick(e){
    const {loadDemoData, data} = this.props;
    const rowData = data[e.currentTarget.attributes.path.value];
    loadDemoData(rowData)
  }

  render() {
    const { activeCard, columns, data } = this.props;
    return (
      <Grid container  spacing={2} justify="center">
        <Grid item xs={10}>
          <MaterialTable
            title={activeCard}
            columns={columns}
            data={data}
            onRowClick={this.onRowClick}
          />
        </Grid>
      </Grid>
    );
  }
}

export default DemoTable;
