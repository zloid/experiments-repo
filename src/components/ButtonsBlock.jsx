import React from 'react'
import { Button } from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider'
import styled from 'styled-components'

const myTheme = {
  '$btn-primary-bg': '#6c757d',
  //   '$btn-primary-bg': '#8a41a2',
  //   '$btn-primary-hover-background': 'red',
  // '$link-hover-decoration': '#ccc',
  '$body-bg': 'silver',
  '$btn-border-radius-lg': '88px',
}

const ButTo = styled(Button)`
  color: gold !important;
  // padding: 50px !important;
  margin-top: 30px;
  // background-color: gold !important;
  :hover& {
    background-color: #6c757d;
    color: tomato !important;
  }
`

const ButtonsBlock = () => {
  return (
    <>
      <br />
      <Button color="info" size="lg" block>
        {'<'} demo
      </Button>
      <br />
      <Button color="success" size="lg" block>
        Get Result
      </Button>

      <br />
      <BootstrapProvider theme={myTheme}>
        <Button color="primary" size="lg" block>
          Delete
        </Button>
      </BootstrapProvider>
      <ButTo>buttoooo</ButTo>
    </>
  )
}

export default ButtonsBlock
