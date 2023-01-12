import React, { useState } from 'react'
import { connect } from 'react-redux'
import { updateValue } from '../../actions'

const ComponentB = ({ updateValue }) => {
  const [inputValue, setInputValue] = useState('')

  const handleChange = (event) => {
    setInputValue(event.target.value)
    updateValue(event.target.value)
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
    </div>
  )
}

const mapDispatchToProps = {
  updateValue: updateValue
}

export default connect(null, mapDispatchToProps)(ComponentB)
