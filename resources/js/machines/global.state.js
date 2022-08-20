import React, { createContext } from 'react';
import { useInterpret } from '@xstate/react';
import ExampleMachine from './example.machine'
import ComponentMachine from './component.machine'

export const GlobalStateContext = createContext({});

export const GlobalStateProvider = (props) => {
  const ExampleService = useInterpret(ExampleMachine)
  const ComponentService = useInterpret(ComponentMachine)
  return (
    <GlobalStateContext.Provider value={{ ExampleService, ComponentService }}>
      {props.children}
    </GlobalStateContext.Provider>
  )
}

