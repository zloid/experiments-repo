import React from 'react'
import { Col, Button } from 'react-bootstrap'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonTwo = styled.button`
  display: inline-block;
  border-radius: 35px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: black;
  border: 2px solid #ccc
`

const UnstyleComponent = ({ className, children }) => (
  <u className={className}>
    {' '}
    some 
    <Button className={className}>bb bb tonn</Button>
    <input />
    <Button>bb bb tonn</Button>
  </u>
)

export const StyledComponent = styled(UnstyleComponent)`
    color: blue
    border: ${props => props.bordered ? '5px' : '1px'} solid
    padding: 3px
    // color: #ccc
`

const OneTextAreaPro = props => {
  return (
    <>
      <Col>
        <textarea />
        <ButtonTwo as="a" href="#" primary>
          i styled button
        </ButtonTwo>
        {/* <UnstyleComponent da/> */}
        <StyledComponent as="a" href="/" bordered>ss s ss </StyledComponent>
      </Col>
    </>
  )
}

OneTextAreaPro.propTypes = {}

export default OneTextAreaPro
