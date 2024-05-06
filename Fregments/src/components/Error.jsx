import React from 'react'

function Error({passingValue}) {

  return (
    <>
       {passingValue.length == 0 && <h3>I am Hungry</h3>}
    </>
  )
}

export default Error