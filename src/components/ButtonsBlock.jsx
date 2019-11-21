import React from 'react'
import { Button } from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider'

const myTheme = {
  '$btn-primary-bg': '#6c757d',
  '$body-bg': 'silver',
  '$btn-border-radius-lg': '88px',
}

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
    </>
  )
}

export default ButtonsBlock
