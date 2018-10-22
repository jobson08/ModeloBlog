import React, {Component} from 'react'

import Wellcome from '../Components/Wellcome'
import ComteudoLateral from '../Components/ComteudoLateral'

class Noticias extends Component{
  render(){
    return(
      <div>
        <Wellcome />
          {/****** Inicio Area para publicidade ******/}
            <section className='special-area bg-white section_padding_100' id='about'>
              <div className='foder-topo container fluid'>
                  <div className='row'>
                      <div className='col-md-12'>
                          {/* Section Heading Area */}
                          <div className='section-heading text-center'>
                              <h2>Publicidade</h2>
                          </div>
                      </div>
              </div>

                {/*Area para comteudo */}

              </div>
              {/****** Fim Area para publicidade ******/}

              {/*Special Description Area */}

                  <section className='special_description_area mt-130'>
                    <div className="container mt-2 py-3">
                        <div className="row ">
                          <div className='col-md-8'>

                {/*inicio post 1*/}
                          <a href='#' className='conte-post row'>
                          <div className='col-md-4'>
                            <img src='img/team-img/team-1.jpg' alt=''/>
                          </div>
                            <div className='col-md-6 px-3'>
                              <div className='card-block px-3'>
                                <p className='card-text'>22/10/2018 </p>
                                <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
                                <p className='card-text'>Consectetur adipiscing elit. </p>
                              </div>
                            </div>
                          </a>
                {/*fim post 1*/}

                {/*inicio post 2*/}
                          <a href='#' className='conte-post row'>
                          <div className='col-md-4'>
                            <img src='img/team-img/team-2.jpg' alt=''/>
                          </div>
                            <div className='col-md-6 px-3'>
                              <div className='card-block px-3'>
                                <p className='card-text'>21/10/2018 </p>
                                <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
                                <p className='card-text'>Consectetur adipiscing elit. </p>
                              </div>
                            </div>
                          </a>
                {/*fim post 2*/}

                {/*inicio post 3*/}
                          <a href='#' className='conte-post row'>
                          <div className='col-md-4'>
                            <img src='img/team-img/team-3.jpg' alt=''/>
                          </div>
                            <div className='col-md-6 px-3'>
                              <div className='card-block px-3'>
                                <p className='card-text'>21/10/2018 </p>
                                <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
                                <p className='card-text'>Consectetur adipiscing elit. </p>
                              </div>
                            </div>
                          </a>
                {/*fim post 3*/}

                {/*inicio post 4*/}
                <a href='#' className='conte-post row'>
                <div className='col-md-4'>
                  <img src='img/team-img/team-4.jpg' alt=''/>
                </div>
                  <div className='col-md-6 px-3'>
                    <div className='card-block px-3'>
                      <p className='card-text'>21/10/2018 </p>
                      <h4 className='card-title'>Lorem ipsum dolor sit amet</h4>
                      <p className='card-text'>Consectetur adipiscing elit. </p>
                    </div>
                  </div>
                </a>
                {/*fim post 4*/}
                    </div>

          {/*Inicio Conteudo lateral*/}
            <div className='conte-lateral col-md-4'>
              <ComteudoLateral />
            </div>
          {/*Fim Conteudo lateral*/}

            </div>
          </div>
    </section>
</section>
        {/* ***** Special Area End ***** */}

  </div>
    );
  }
}

export default Noticias;
