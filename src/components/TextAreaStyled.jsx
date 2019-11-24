import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

const OneTextArea = ({ className, initialInnerValue }) => {
  const [innerVal, setInnerVal] = useState(initialInnerValue)
  return (
    <>
      <Textarea value={innerVal} onChange={e => 
        {          
          setInnerVal(e.target.value)
          console.log(e.target.value)
        }} minRows={14} className={className} />
    </>
  )
}

const TextAreaStyled = styled(OneTextArea)`
  //    .sticky
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  //    textarea
  border-radius: 5px;
  text-align: left;
  overflow: hidden;
  font-size: 16px;
`

OneTextArea.propTypes = {
  className: PropTypes.string.isRequired,
}

export default TextAreaStyled
