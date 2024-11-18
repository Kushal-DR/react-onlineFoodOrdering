import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    const error = err.data;
    console.log(err.status);
  return (
    <div>
      <h2>{error}</h2>
      <h2>{err.status + "--"+ err.statusText}</h2>
    </div>
  )
}

export default Error
