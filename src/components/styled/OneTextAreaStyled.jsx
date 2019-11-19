import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Textarea from 'react-textarea-autosize'

const OneTextArea = ({ className }) => {
  return (
    <>
      <Textarea minRows={10} className={className} />
    </>
  )
}

const OneTextAreaStyled = styled(OneTextArea)`
  //    .sticky
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  //    textarea
  border-radius: 5px;
  //   min-height: 300px;
  text-align: right;
  overflow: hidden;
  font-size: 20px;
`

OneTextArea.propTypes = {
  className: PropTypes.string.isRequired,
}

export default OneTextAreaStyled
