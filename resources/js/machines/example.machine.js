import { createMachine, assign } from 'xstate' 

export default createMachine({
  id: 'Example',
  initial: 'idle',
  on: {
    // Events
  },
  context: {
    // Data
  },
  states: {
    idle: {}
  }
})