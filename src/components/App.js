import React from 'react'
import './App.css'
import TextAreaStyled from './TextAreaStyled'
import LinesCounterStyled from './LinesCounterStyled'
import ButtonsBlockContainer from '../containers/ButtonsBlockContainer'

import { Container, Row, Col } from '@bootstrap-styled/v4'
import { WrapAll } from './WrapAll'
import FirstTextareaBlockContainer from '../containers/FirstTextareaBlockContainer'

function App() {
  return (
    <Container>
      <WrapAll>
        <Row>
          <Col>
            <FirstTextareaBlockContainer />
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
      </WrapAll>
    </Container>
  )
}

export default App
