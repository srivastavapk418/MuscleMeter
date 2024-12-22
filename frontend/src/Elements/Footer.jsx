import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/logo.png'
import img2 from '../assets/img/image.png'


const Footer = () => {
  return (
    <>
      <hr />
      <div className='col-md-12 h-auto p-4 pb-5 bg-light text-dark container-fluid d-md-flex'>
      <div className='col-md-4 col-sm-12 d-lg-flex flex-column justify-content-center'>
      <Link className="nav-link d-flex" to="/">
          <img src={img1} className="w-3 my-auto" alt="" />
          &nbsp; &nbsp;
          <p className='my-auto fw-bold fs-5'>&nbsp;MuscleMeter</p>
      </Link><br />
      <img src={img2} className='w-11' alt="" />
      </div>
      <div className='col-md-8 col-sm-12 fs-7 d-md-flex'>
        <div className='col-md-4'>
          <p className='fs-7 fw-bold'>Help</p>
          <Link to="" className='nav-link fl'>Log In / Register</Link>
          <Link to="" className='nav-link fl'>Privacy Center</Link>
          <Link to="" className='nav-link fl'>Support</Link>
          <Link to="" className='nav-link fl'>Developer / API</Link>
        </div>
        <div className='col-md-4'>
        <p className='fs-7 fw-bold'>About</p>
          <Link to="" className='nav-link fl'>Contact Us</Link>
          <Link to="" className='nav-link fl'>Join Our Team</Link>
        </div>
        <div className='col-md-4'>
        <p className='fs-7 fw-bold'>Connect</p>
          <span className='d-flex'><i className='fa-brands fa-facebook my-auto text-primary'></i><Link to="" className='nav-link ms-2 fl'>Facebook</Link></span>
          <span className='d-flex'><i className='fa-brands fa-instagram my-auto text-danger'></i><Link to="" className='nav-link ms-2 fl'>Instagram</Link></span>
          <span className='d-flex'><i className='fa-brands fa-x-twitter my-auto text-dark'></i><Link to="" className='nav-link ms-2 fl'>X-Twitter</Link></span>
          <span className='d-flex'><i className='fa-brands fa-youtube my-auto text-danger'></i><Link to="" className='nav-link ms-2 fl'>Youtube</Link></span>
        </div>
      </div>
    </div>
    
    <div className='row h-auto p-3 bg-dark text-light container-fluid text-center'>
      <div className='col-md-4'>
        <h3 className='fs-2 text-warning' style={{fontFamily:"Plus Jakarta Sans"}}>Outside</h3>
        <p className='mx-auto fs-7'>© 2024 Outside Interactive®, Inc. All rights reserved</p>

      </div>
      <div className='col-md-8 mx-auto d-lg-flex fs-7 pl-10 my-auto'>
        <div>Privacy Policy</div><div className='d-none d-lg-block'>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
        <div>Terms of Use</div><div className='d-none d-lg-block'>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
        <div>Cookie Policy</div><div className='d-none d-lg-block'>&nbsp;&nbsp;/&nbsp;&nbsp;</div>
        <div>Manage Cookie Preferences</div>
      </div>
    </div>
    </>
  )
}

export default Footer
