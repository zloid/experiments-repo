import React from 'react'
import PropTypes from 'prop-types'

const TextareaOneComponent = ({ dataForTextareaOne, putDataToStore }) => {
  return (
    <div>
      <strong>TextareaOneComponent: </strong>
      <textarea
        value={dataForTextareaOne.firstTextareaData}
        onChange={e => putDataToStore(e.target.value)}
      />
    </div>
  )
}

TextareaOneComponent.propTypes = {
  dataForTextareaOne: PropTypes.object.isRequired,
  putDataToStore: PropTypes.func.isRequired,
}

export default TextareaOneComponent
