import React from 'react'
import PropTypes from 'prop-types'
// Material
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function Confirm({
  title,
  message,
  open,
  onClose,
  onConfirm
}) {

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {message}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="error" onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}
Confirm.propTypes = {
  title: PropTypes.string.required,
  message: PropTypes.string.required,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
}
Confirm.defaultValues = {
  open: false,
  onClose: () => {},
  onConfirm: () => {} 
}


export default {
  Confirm
}