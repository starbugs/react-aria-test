import React from 'react'
import { State } from './App'
import NumberField from './NumberField'

export interface Vec {
  x: number
  y: number
}

export interface SidebarProps {
  state: State
  dispatch: (vec: Vec) => void
}

export default function Sidebar(props: SidebarProps) {
  const onChange = (valueLabel: string, value: number) => {
    const vec = { ...props.state.vec }
    if (valueLabel === 'x') {
      vec.x = value
    } else {
      vec.y = value
    }
    props.dispatch(vec)
  }

  const onChangeX = (value: number) => onChange('x', value)
  const onChangeY = (value: number) => onChange('y', value)

  return (
    <div>
      <NumberField
        label="Controlled value"
        defaultValue={NaN}
        value={props.state.vec.x}
        onChange={onChangeX} />
      <NumberField
        label="Controlled value"
        defaultValue={NaN}
        value={props.state.vec.y}
        onChange={onChangeY} />
    </div>
  )
}