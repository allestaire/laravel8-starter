import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Material
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import ButtonGroup from '@mui/material/ButtonGroup';
import { styled } from '@mui/material/styles';
// Packages
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
// Icons
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ErrorIcon from '@mui/icons-material/Error';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
  // standardFontDataUrl: 'standard_fonts/',
};

const MyPaper = styled(Paper)(({theme}) => ({
  ['&.MuiPaper-root']: {
    padding: 100
  }
}))

function FileInfoModal({
  row,
  open,
  onClose = () => {}
}) {
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [pageNum, setPageNum] = useState(1)
  const handleOnLoadPdf = (data) => {
    setNumberOfPages(data.numPages)
  }
  const onNextPdfPage = () => {
    if((pageNum+1) <= numberOfPages) {
      setPageNum(pageNum+1)
    }
  }
  const onPrevPDFPage = () => {
    if((pageNum-1) > 0) {
      setPageNum(pageNum-1)
    }
  }
  const displayContent = () => {
    const info = row
    if(!info?.path) {
      return (
        <MyPaper elevation={3}>
          <Typography align="center" variant="h4"><ErrorIcon color="error"/> File not Found!</Typography>
        </MyPaper>
      )
    }

    if(['jpg', 'jpeg', 'png'].includes(info.extension)) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={2}>
              <img src={info.path} style={{width: '100%'}}/>
            </Paper>
          </Grid>
        </Grid>
      )
    }
    if(['pdf'].includes(info.extension)) {
      return (
        <Grid container spacing={2}>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
            <Paper elevation={2}>
              <Document file={info.path} onLoadSuccess={handleOnLoadPdf} options={options}>
                <Page pageNumber={pageNum} />
              </Document>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center'}}>
            <ButtonGroup variant="contained" size="small">
              <Button onClick={() => onPrevPDFPage()}><ChevronLeftIcon /></Button>
              <Button>{pageNum} / {numberOfPages}</Button>
              <Button onClick={() => onNextPdfPage()}><ChevronRightIcon /></Button>
            </ButtonGroup>
          </Grid>
        </Grid>
      )
    }
    return 'awdad'
  }
  return (
    <Dialog
      fullWidth={true}
      maxWidth="md"
      open={open}
      onClose={onClose}
    >
      <DialogTitle>{row?.filename}</DialogTitle>
      <DialogContent>
        { displayContent() }
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  )
}
FileInfoModal.propTypes = {
  row: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func
}

export default FileInfoModal