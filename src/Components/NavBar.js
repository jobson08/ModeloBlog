import React from 'react'

import {Link} from 'react-router-dom'

import Wellcome from './Wellcome'
const NavBar = porps =>{
  return(
    <div>
    {/* Preloader Start
      <div id="preloader">
          <div className="colorlib-load"></div>
      </div>*/}

      {/* ***** Header Area Start */}
      <header className="header_area animated">
          <div className="container-fluid">
              <div className="row align-items-center">
                  {/*Menu Area Start */}
                  <div className="col-12 col-lg-10">
                      <div className="menu_area">
                          <nav className="navbar navbar-expand-lg navbar-light">
                              {/*} Logo*/}
                              <a className="navbar-brand" href="#">NQ</a>
                              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ca-navbar" aria-controls="ca-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                              {/*} Menu*/}
                              <div className="collapse navbar-collapse" id="ca-navbar">
                                  <ul className="navbar-nav ml-auto" id="nav">
                                      <li className="nav-item active"><a className="nav-link" href="#home">HOME</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#about">PERFIL</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#features">COLUNAS</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#features">OPINIÃO</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#features">ANUNCIE</a></li>
                                      <li className="nav-item"><a className="nav-link" href="#features">FALE COM NOSCO</a></li>
                                  </ul>
                                  <div className="sing-up-button d-lg-none">
                                      <a href="#">Sign Up Free</a>
                                  </div>
                              </div>
                          </nav>
                      </div>
                  </div>
                  <div className="col-12 col-lg-2">
            <div className="sing-up-button d-none d-lg-block">
                <a href="#">Sign Up Free</a>
            </div>
        </div>
    </div>
</div>
</header>

<Wellcome />

</div>

  )
}

export default NavBar
