import React from 'react'
import { Provider } from 'react-redux'
import store from '../../store'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'

const ComponentA = () => {
  return (
    <Provider store={store}>
      <ComponentB />
      <ComponentC />
    </Provider>
  )
}

export default ComponentA