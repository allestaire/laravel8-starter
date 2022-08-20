import React from 'react';
// Material
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// Icons
import ErrorIcon from '@mui/icons-material/Error';
import InfoIcon from '@mui/icons-material/Info';

export const Fetching = ({
  colSpan = 0,
  message = 'Fetching . . .'
}) => {

  return (
    <TableRow
    >
      <TableCell component="th" scope="row" colSpan={colSpan}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <CircularProgress size={20} />&nbsp;<span>{ message }</span>
        </div>
      </TableCell>
    </TableRow>
  )
}

export const Critical = ({
  colSpan = 0,
  message = 'Oops something went wrong!',
  onClick = () => {}
}) => {

  return (
    <TableRow
    >
      <TableCell component="th" scope="row" colSpan={colSpan}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Typography color="error" sx={{display: 'flex'}}>
            <ErrorIcon size={20} />&nbsp;<span>{ message }</span>
          </Typography>
          <Button onClick={onClick}>click to try again</Button>
        </div>
      </TableCell>
    </TableRow>
  )
}

export const NoResult = ({
  colSpan = 0,
  message = 'No result yet.',
  onClick = () => {}
}) => {

  return (
    <TableRow
    >
      <TableCell component="th" scope="row" colSpan={colSpan}>
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
          <Typography sx={{display: 'flex'}}>
            <InfoIcon size={20} />&nbsp;<span>{ message }</span>
          </Typography>
          {
            !!onClick &&
            <Button color="info" onClick={onClick}>click here to create</Button>
          }
        </div>
      </TableCell>
    </TableRow>
  )
}