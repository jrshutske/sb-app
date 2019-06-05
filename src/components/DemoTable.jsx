import '../App.css';
import React from "react";
import MaterialTable from 'material-table';
import Grid from '@material-ui/core/Grid';
import Grow from "@material-ui/core/Grow";

const DemoTable = (props) => {
  const { activeCard, columns, data } = props;

  const onRowClick = (e) => {
    const {loadDemoData, data} = props;
    const rowData = data[e.currentTarget.attributes.path.value];
    loadDemoData(rowData)
  }

  return (
    <Grid container  spacing={2} justify="center">
      <Grid item xs={10}>
        <Grow in>
          <MaterialTable
            title={activeCard}
            columns={columns}
            data={data}
            onRowClick={e=>onRowClick(e)}
          />
        </Grow>
      </Grid>
    </Grid>
  );
}

export default DemoTable;
