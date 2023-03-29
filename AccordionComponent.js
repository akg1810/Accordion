import React, { useState } from 'react'

const AccordionComponent = (props) => {
  const[show,setShow]=useState(false);
  return (
    <>
      <div className='units flex'>
        <div className='main-heading flex'>
          <h2>{props.question}</h2>
          <div className='button' onClick={()=>{setShow(!show)}}> + </div>
        </div>
        {show && <p className='ans'>{props.answer}</p>}
      </div>
    </>
  )
}

export default AccordionComponent
