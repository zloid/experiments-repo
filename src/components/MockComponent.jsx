import React, { useState } from 'react'

const MockComponent = ({ dataFromContainer, clli }) => {
  // const [count, setCount] = useState('count from useState')
  const [count, setCount] = useState(dataFromContainer)
  // const [count, setCount] = useState('not a dataFromContainer')
  const [inp3, setInp3] = useState([333, 1, 3])
  let input222

  const handleInput = e => {
    // setCount(e.target.value)
    clli(e.target.value)
  }

  return (
    <div>
      <hr />
      <textarea
        value={dataFromContainer}
        onChange={handleInput}
        row={222}
      ></textarea>
      <input
        value={count}
        // onChange={e => {
        //   setCount(e.target.value)
        // }}
        onChange={handleInput}
      />
      <u>mockComponent or </u>
      <br />
      <input value={dataFromContainer} onChange={() => {}} />
      <br />
      <strong>count:</strong> {count}
      <br />
      <strong>dataFromContaineriii:</strong> {dataFromContainer}
      <br />
      {/* <button onClick={() => setCount(count + 1)}>inp 1 Click test</button> */}
      <button onClick={() => clli(count)}>inp 1 Click test</button>
      <hr />
      <br />
      {/* <form> */}
      {/* {input222.value()} */}
      <strong>{typeof inp3}</strong>
      <hr />
      <strong>{inp3.length}</strong>
      <br />
      <input
        ref={node => {
          input222 = node
        }}
      />
      <button
        onClick={() => input222.value.trim() && console.log(input222.value)}
      >
        cli input222
      </button>
      <br />
      <button onClick={() => setInp3(input222.value)}>inp test</button>
      {/* </form> */}
    </div>
  )
}

export default MockComponent
