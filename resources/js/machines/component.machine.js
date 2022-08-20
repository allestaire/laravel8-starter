import { createMachine } from 'xstate'


export default createMachine({
  id: 'Component',
  initial: 'idle',
  states: {
    idle: {
      on: {
        ALERT_LOADING: 'alerts.loading',
        ALERT_SUCCESS: 'alerts.success',
        ALERT_FAILURE: 'alerts.failure',
        OVERLAY: 'overlay',
      }
    },
    alerts: {
      states: {
        loading: {
          on: {
            CLOSE: '#Component.idle'
          }
        },
        success: {
          on: {
            CLOSE: '#Component.idle'
          }
        },
        failure: {
          on: {
            CLOSE: '#Component.idle'
          }
        }
      }
    },
    overlay: {
      after: {
        3000: {
          target: 'idle'
        }
      }
    }
  }
})