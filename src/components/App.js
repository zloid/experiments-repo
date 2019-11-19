import React from 'react'
import './App.css'
// import { Container, Row, Col } from 'react-bootstrap'
import OneTextAreaStyled from './styled/OneTextAreaStyled'
import LinesCounterStyled from './styled/LinesCounterStyled'
import ButtonsBlockContainer from '../containers/ButtonsBlockContainer'

import { Container, Row, Col, Button, Alert } from '@bootstrap-styled/v4'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Alert color="danger">@bootstrap-styled/v4</Alert>

          <LinesCounterStyled />
          <OneTextAreaStyled />
        </Col>
        <Col>
          <OneTextAreaStyled />
        </Col>
        <Col>
          <ButtonsBlockContainer />
        </Col>
        <Col>
          <OneTextAreaStyled />
        </Col>
        <Col>
          <OneTextAreaStyled />
        </Col>
      </Row>
      {/* <TextareaOneContainer /> */}
      {/* <ContainerInput /> */}
      {/* <OneTextAreaPro /> */}
      {/* <OneTextAreaPro /> */}
      {/* <OneTextAreaPro /> */}
      {/* <OneTextAreaPro /> */}
      {/* <StyledComponent as="a" href="/">link</StyledComponent> */}
      {/* <StyledComponent bordered={true} as="strong">stro</StyledComponent> */}
      {/* <StyledComponent as="button">click</StyledComponent> */}
      {/* <br /> */}
      {/* <StyledComponent bordered>click</StyledComponent> */}
    </Container>
  )
}

export default App
