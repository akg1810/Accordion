import React from 'react'
import "./index.css"
import Accordiancomponent from './Components/AccordionComponent'

const Accordion = () => {
     const data = [
          {
               id:1,
               question:"Is this a good product",
               answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus. Enim diam vulputate ut pharetra sit amet aliquam id diam. Risus sed vulputate odio ut enim blandit volutpat."
          },
          {
               id:2,
               question:"How much does it cost?",
               answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus. Enim diam vulputate ut pharetra sit amet aliquam id diam. Risus sed vulputate odio ut enim blandit volutpat."
          },
          {
               id:3,
               question:"When can I get it?",
               answer:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id eu nisl nunc mi ipsum faucibus. Enim diam vulputate ut pharetra sit amet aliquam id diam. Risus sed vulputate odio ut enim blandit volutpat."
          }]
     
  return (
    <>
     <div className='faq-section flex'>
           <h1>Frequently Asked Questions</h1>
           {
                data.map((element)=>{
                     const {id,question,answer}=element;
                     return <Accordiancomponent key={id} question={question} answer={answer}/>
                })
           }
     </div>
    </>
  )
}

export default Accordion
