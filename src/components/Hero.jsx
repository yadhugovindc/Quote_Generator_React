import React, { useState } from 'react'
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import './Hero.css';

const Hero = ({quotes,fetchData,savedata,addalert,unsuccess}) => {
  const [alert,setAlert]=useState(false);
  const copyData=(text)=>{
 navigator.clipboard.writeText(text).then(
  () => {
      setAlert(true)
      setTimeout(()=>{
        setAlert(false)
      },1000)
  },
  () => {
      alert("Copying failed")
  }
)

  }
  return (
    <>
    <section className='hero' >
    <div className="container">
    <div className="row justify-content-center">
    
   {quotes.map((item,index)=>(
       <div className="col-12 col-md-6 mb-4" key={index}>
         <Card variant="outlined" className='p-5 bg-dark text-light card-container'>

          <figure className="text-end">
            <blockquote className="blockquote">
              <p>"{item.quote}"</p>
            </blockquote>
            <figcaption className="blockquote-footer">
              <cite title="Source Title">{item.author}</cite>
            </figcaption>
          </figure>

          {/* <h1 className='fw-bolder'>Quote of the day</h1>
          <p className='fs-italic'>"{item.quote}"</p>
          <p>-- {item.author}</p> */}
          <Button variant="outlined" onClick={fetchData} className='me-2'>Genate new Quote</Button>
          <Button variant="outlined" onClick={()=>copyData(`${item.quote}--${item.author}`)} className='me-2'>Copy to Clipboard</Button>
          <Button variant="outlined" onClick={()=>savedata(`${item.quote}`,`${item.author}`)} >Add to saved list</Button>
          {alert&&<Alert variant="filled" severity="info" className='mt-3'>
  copied successfully
</Alert>}
{addalert&&<Alert variant="filled" severity="info" className='mt-3'>
  saved successfully
</Alert>}
{unsuccess&&<Alert variant="filled" severity="error" className='mt-3'>
   Item Already Saved
</Alert>}
         </Card>  
         </div>
   ))}
     </div>
     </div>
    </section>

  
    </>
  )
}

export default Hero;