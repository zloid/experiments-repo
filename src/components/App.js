import React from 'react'
import './App.css'
import OneTextAreaStyled from './styled/OneTextAreaStyled'
import LinesCounterStyled from './styled/LinesCounterStyled'
import ButtonsBlockContainer from '../containers/ButtonsBlockContainer'

import { Container, Row, Col, Button } from '@bootstrap-styled/v4'

function App() {
  return (
    <Container>
      <Row>
        <Col>
        <Button color="primary">color test</Button>
          <LinesCounterStyled />
          <OneTextAreaStyled />
        </Col>
        <Col>
          <LinesCounterStyled />
          <OneTextAreaStyled />
        </Col>
        <Col lg="2" >
          <ButtonsBlockContainer />
        </Col>
        <Col>
          <LinesCounterStyled />
          <ButtonsBlockContainer />
          <OneTextAreaStyled />
        </Col>
        <Col>
          <LinesCounterStyled />
          <OneTextAreaStyled />
        </Col>
      </Row>
    </Container>
  )
}

export default App
