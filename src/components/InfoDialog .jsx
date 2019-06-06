import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import PropTypes from "prop-types";

function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

class InfoDialog  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: null,
      rowData: null
    };
  }

  componentDidMount() {
    this.setState({
      open: this.props.open,
      rowData: this.props.rowData
    })
  }

  render() {
    const {open, rowData, handleClose} = this.props;    
    const data = Object.entries(rowData).map(([key,value])=>{
      return (
        key !== "tableData" && 
        <React.Fragment key={key}>
          {key} : {value} <br />
        </React.Fragment>
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

InfoDialog.propTypes = {
  open: PropTypes.bool,
  rowData: PropTypes.object,
  handleClose: PropTypes.func
};

InfoDialog.defaultProps = {
  open: null,
  rowData: null,
  handleClose: null
};

export default InfoDialog ;
