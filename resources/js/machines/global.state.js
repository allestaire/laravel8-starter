import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import ExampleMachine from './example.machine'

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const ExampleService = useInterpret(ExampleMachine)
  return (
    <GlobalStateContext.Provider value={{ ExampleService }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

