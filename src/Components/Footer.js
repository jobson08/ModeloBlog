import React from 'react'

const Footer = props =>{
  return(
    <div>
      {/* ***** Footer Area Start ***** */}
      <footer className='footer-social-icon text-center section_padding_40 clearfix'>
          {/* footer logo */}
          <div className='footer-text'>
              <h2>NQ.</h2>
          </div>
          {/* social icon*/}
          <div className='footer-social-icon'>
              <a href='#'><i className='fa fa-facebook' aria-hidden='true'></i></a>
              <a href='#'><i className='active fa fa-twitter' aria-hidden='true'></i></a>
              <a href='#'> <i className='fa fa-instagram' aria-hidden='true'></i></a>
              <a href='#'><i className='fa fa-google-plus' aria-hidden='true'></i></a>
          </div>
          <div className='footer-menu'>
              <nav>
                  <ul>
                      <li><a href='#'>About</a></li>
                      <li><a href='#'>Terms &amp; Conditions</a></li>
                      <li><a href='#'>Privacy Policy</a></li>
                      <li><a href='#'>Contact</a></li>
                  </ul>
              </nav>
          </div>
          {/*Foooter Text*/}
          <div className='copyright-text'>
              {/*} ***** Removing this text is now allowed! This template is licensed under CC BY 3.0 ***** */}
              <p>Copyright ©2017 Ca. Designed by <a href='https://colorlib.com' target='_blank'>Colorlib</a></p>
          </div>
      </footer>
    {/* ***** Footer Area Start ***** */}
  </div>
  )
}

export default Footer;
