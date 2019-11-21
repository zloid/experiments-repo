import React from 'react'
import './App.css'
import TextAreaStyled from './TextAreaStyled'
import LinesCounterStyled from './LinesCounterStyled'
import ButtonsBlockContainer from '../containers/ButtonsBlockContainer'

import { Container, Row, Col } from '@bootstrap-styled/v4'
// import BootstrapProvider from '@bootstrap-styled/provider/lib/BootstrapProvider';

import { WrapAll } from './WrapAll'

const myTheme = {
  '$btn-primary-bg': 'green',
  //   '$btn-border-width': '33px',
  '$body-bg': '',
}

function App() {
  return (
    <Container>
      <WrapAll>
        <Row>
          <Col>
            <LinesCounterStyled />
            <TextAreaStyled />
          </Col>

          <Col>
            <LinesCounterStyled />
            <TextAreaStyled />
          </Col>

          <Col lg="2">
            <ButtonsBlockContainer />
          </Col>

          <Col>
            <LinesCounterStyled />
            {/* <ButtonsBlockContainer /> */}
            <TextAreaStyled />
          </Col>
          <Col>
            <LinesCounterStyled />
            <TextAreaStyled />
          </Col>
        </Row>
        {/* 
        <BootstrapProvider theme={myTheme}>
        <Button color="success"    >
          457646
        </Button>
        33333333
        <br />
        <Button color="primary" size="lg" block>
          vdsvdsvsdvss
        </Button>
      </BootstrapProvider>
       */}
      </WrapAll>
    </Container>
  )
}

export default App
