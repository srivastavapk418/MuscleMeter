import React from 'react'
import pend from '../assets/img/pend.png'

function Pending() {
  return (
    <div className='col-md-6 mx-auto text-center py-5'>
        <img src={pend} className='w-50' alt="" />
        <h1>Pending! Waiting For Approval</h1>
    </div>
  )
}

export default Pending