import React from 'react'
import LinesCounterStyled from './LinesCounterStyled'
import TextAreaStyled from './TextAreaStyled'

const FirstLeftTextareaBlock = ({ dataForTextareaOne }) => {
//   const mappedData = dataForTextareaOne.map((number, key) => (
//     <p key={key}>{number}</p>
//   ))
const mappedData = dataForTextareaOne.join('\n')
  return (
    <>
      <LinesCounterStyled />
      <TextAreaStyled initialInnerValue={mappedData} />
    </>
  )
}

export default FirstLeftTextareaBlock
