import React, { Fragment, useContext } from 'react';
// Material
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
// Pre-defined components
import Alerts from '../components/Alerts'
import Overlay from '../components/Overlay'
// States
import { GlobalStateContext } from '../machines/global.state'
import { useActor } from '@xstate/react'

function Components() {
  const Services = useContext(GlobalStateContext)
  const State = useActor(Services.ComponentService)

  const handleAlert = (event) => {
    State[1](event)
  }
  const handleClose = () => {
    State[1]('CLOSE')
  }
  return (
    <Paper elevation={2} sx={{p: 5}}>
      <Stack spacing={2} direction="row" sx={{justifyContent: 'center'}}>
        <Button variant="contained" onClick={() => handleAlert('ALERT_LOADING')}>Loading</Button>
        <Button variant="contained" color="success" onClick={() => handleAlert('ALERT_SUCCESS')}>Success</Button>
        <Button variant="contained" color="error" onClick={() => handleAlert('ALERT_FAILURE')}>Failure</Button>
      </Stack>
      <Alerts.Loading
        open={State[0].matches('alerts.loading')}
        message='Loading. . .'
        onClose={handleClose}
      />
      <Alerts.Success
        open={State[0].matches('alerts.success')}
        message='Success!'
        onClose={handleClose}
      />
      <Alerts.Failure
        open={State[0].matches('alerts.failure')}
        message='Failure!'
        onClose={handleClose}
      />
      <br />
      <Stack spacing={2} direction="row" sx={{justifyContent: 'center'}}>
        <Button variant="contained" onClick={() => handleAlert('OVERLAY')}>Overlay</Button>
      </Stack>
      <Overlay
        open={State[0].matches('overlay')}
        message="My simple message"
      />
    </Paper>
  )
}

export default Components