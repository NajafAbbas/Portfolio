import React from 'react'
import './Heroimg2.style.css'

const Heroimg2 = (props) => {
  return (
    <div className='heroimg2'>
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>{props.para}</p>
      </div>
    </div>
  )
}

export default Heroimg2
