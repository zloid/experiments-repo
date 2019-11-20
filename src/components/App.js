import React from 'react'
import './App.css'
import OneTextAreaStyled from './styled/OneTextAreaStyled'
import LinesCounterStyled from './styled/LinesCounterStyled'
import ButtonsBlockContainer from '../containers/ButtonsBlockContainer'

import { Container, Row, Col, Button } from '@bootstrap-styled/v4'
import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { WrapAll } from './WrapAll'


const myTheme = {
  '$btn-primary-bg': 'green',
  //   '$btn-border-width': '33px',
  // '$body-bg': 'silver',
}


function App() {
  return (
    <Container>
      <WrapAll>
        <Row>
          <Col>
            <LinesCounterStyled />
            <OneTextAreaStyled />
          </Col>

          <Col>
            <LinesCounterStyled />
            <OneTextAreaStyled />
          </Col>

          <Col lg="2">
            <ButtonsBlockContainer />
          </Col>

          <Col>
            <LinesCounterStyled />
            {/* <ButtonsBlockContainer /> */}
            <OneTextAreaStyled />
          </Col>
          <Col>
            <LinesCounterStyled />
            <OneTextAreaStyled />
          </Col>
        </Row>
        <BootstrapProvider theme={myTheme}>
        <Button color="success" size="lg" block>
          Get Result
        </Button>
        33333333
        <br />
        <Button color="primary" size="lg" block>
          Delete
        </Button>
      </BootstrapProvider>
      </WrapAll>
    </Container>
  )
}

export default App
