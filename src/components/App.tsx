import React, { useState } from 'react'
import NumberField from './NumberField'
import Sidebar, { Vec } from './Sidebar'

export interface State {
  vec: Vec
  otherValue: number
}

export default function App() {
  let [state, setState] = useState<State>({ otherValue: 1, vec: { x: NaN, y: 2 } })

  const apply = (vec: Vec) => {
    state = { otherValue: 2, vec }
    setState(state)
  }

  let [dispatch,] = useState(() => apply)

  return (
    <div>
      <Sidebar dispatch={dispatch} state={state}/>
    </div>
  )
}