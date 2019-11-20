import React from 'react'
import { Button } from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider'

const myTheme = {
  '$btn-primary-bg': 'tomato',
  //   '$btn-border-width': '33px',
  '$body-bg': 'silver',
}

const ButtonsBlock = () => {
  return (
    <>
      <Button color="info" size="lg" block>
        {'<'} demo
      </Button>
      <br />
      <BootstrapProvider theme={myTheme}>
        <Button color="success" size="lg" block>
          Get Result
        </Button>
        tssssssssssss
        <br />
        <Button color="primary" size="lg" block>
          Delete
        </Button>
      </BootstrapProvider>
    </>
  )
}

export default ButtonsBlock
