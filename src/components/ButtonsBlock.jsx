import React from 'react'
import { Button } from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

const myTheme = {
    '$btn-primary-bg': 'blue',
    '$btn-primary-color': 'red',
  };

const ButtonsBlock = () => {
  return (
    <>
      <Button color="info" size="lg" block>
        {'<'} demo
      </Button>
      <Button color="success" size="lg" block>
        Get Result
      </Button>
      <BootstrapProvider theme={myTheme}>
      <Button color="primary" size="lg" block>
        Delete
      </Button>
      </BootstrapProvider>
    </>
  )
}

export default ButtonsBlock
