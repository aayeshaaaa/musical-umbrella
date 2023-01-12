import React from 'react'
import { connect } from 'react-redux'

const ComponentC = ({ value }) => {
  return (
    <div>
      <p>{value}</p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  }
}

export default connect(mapStateToProps)(ComponentC)