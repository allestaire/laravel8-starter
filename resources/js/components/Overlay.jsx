import React from 'react';
import PropTypes from 'prop-types';
// Material
import Backdrop from '@mui/material/Backdrop';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';

function Overlay ({
  open,
  message
}) {
  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
    >
      <Stack spacing={2} direction="column" sx={{justifyContent: 'center'}}>
        <Typography align="center"><CircularProgress color="inherit" /></Typography>
        {
          Boolean(message) && (
            <div>{message}</div>
          )
        }
      </Stack>
    </Backdrop>
  )
}
Overlay.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}
Overlay.defaultProps = {
  open: false,
  message: ''
}

export default Overlay