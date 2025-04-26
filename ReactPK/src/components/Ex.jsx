import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <>
      <div>I am Example {props.name}</div>
      <Ex2 />
    </>
  );
}

export default Ex