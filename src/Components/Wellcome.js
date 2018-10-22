import React from 'react'

const Wellcome = porps =>{
  return(
    <div>
    {/* Wellcome Area Start */}

      <section className='wellcome_area clearfix' id='home'>
          <div className='container h-100'>
              <div className='row h-100 align-items-center'>
                  <div className='col-12 col-md'>
                      <div className='wellcome-heading'>
                          <h2>Nos Que!</h2>
                          <h3>C</h3>
                          <p className='texto-wellcome'>Fique informado e Denucie</p>
                      </div>
                      <div className='get-start-area'>
                          {/* Form Start
                          <form action='#' method='post' className='form-inline'>
                              <input type='email' className='form-control email' placeholder='name@company.com'>
                              <input type='submit' className='submit' value='Get Started'>
                          </form>*/}
                          {/* Form End */}
                        {/* <div className='welcome-thumb wow fadeInDown' data-wow-delay='0.5s'>
                              <img src='img/bg-img/logo-vermelho.png' alt=''/>
                          </div>*/}
                      </div>
                  </div>
              </div>
          </div>
          {/* Welcome thumb*/}

      </section>
      {/*Wellcome Area End */}
    </div>
  )
}
export default Wellcome;
