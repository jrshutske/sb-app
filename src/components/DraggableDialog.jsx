import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

class DraggableDialog extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: this.props.open,
      rowData: this.props.rowData
    };

  }

render() {
  const {open, rowData, handleClose} = this.props;
  console.log(rowData)
  
  const data = Object.entries(rowData).map(([key,value])=>{
    return (
        key !== "tableData" && <p>{key} : {value && value.toString()}</p>
    );
  })
  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          {rowData.displayname}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            {data}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );

}
  
}

export default DraggableDialog;
