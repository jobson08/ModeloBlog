import React, {Component} from 'react'

import Wellcome from '../Components/Wellcome'
import ComteudoLateral from '../Components/ComteudoLateral'

class Leitor extends Component{
  render(){
    return(
      <div>
      <Wellcome />*
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

              {/*Postes */}
              <div className='special_description_area mt-130'>
                  <div className='container'>
                    <div className='mt-2 py-3'>
                      <div className='row'>

                        {/*Inicion Post 1*/}
                          <div className='col-md-8'>
                            <div className='conte-post'>
                              <div className='special_description_content'>

                          <div className='section-heading text-center'>
                                    <h2>Leitores Atento</h2>
                          </div>

                      <div className='row col-md-12'>
                        <a href='#' className='cont-infor-post'>
                        <div class="col-md-4">
                          <div class="single-team-member">
                              <div class="member-image">
                                  <img src="img/team-img/team-1.jpg" alt=""/>
                                    <div class="member-text">
                                        <h4>Jackson Nash</h4>
                                        <p>Tax Advice</p>
                                    </div>
                                <div class="team-hover-effects">
                              </div>
                              </div>
                          </div>
                      </div>
                    </a>

                    <a href='#' className='cont-infor-post'>
                    <div class="col-md-4">
                      <div class="single-team-member">
                          <div class="member-image">
                              <img className='img-fluid 'src='img/bg-img/welcome-img.png' alt=''/>
                                <div class="member-text">
                                    <h4>Jackson Nash</h4>
                                    <p>Tax Advice</p>
                                </div>
                              <div class="team-hover-effects">
                              </div>
                          </div>

                      </div>
                  </div>
                </a>

                <a href='#' className='cont-infor-post'>
                <div class="col-md-4">
                  <div class="single-team-member">
                      <div class="member-image">
                          <img src="img/team-img/team-2.jpg" alt=""/>
                            <div class="member-text">
                                <h4>Jackson Nash</h4>
                                <p>Tax Advice</p>
                            </div>
                        <div class="team-hover-effects">
                      </div>
                      </div>
                  </div>
              </div>
            </a>

            <a href='#' className='cont-infor-post'>
            <div class="col-md-4">
              <div class="single-team-member">
                  <div class="member-image">
                      <img src="img/team-img/team-3.jpg" alt=""/>
                        <div class="member-text ">
                            <h4>Jackson Nash</h4>
                            <p>Tax Advice</p>
                        </div>
                    <div class="team-hover-effects">
                  </div>
                  </div>
              </div>
          </div>
        </a>

                </div>
            </div>
          </div>
      </div>
        {/*Fim Post 1*/}

  {/*Inicio Conteudo lateral*/}
        <div className='conte-lateral col-md-4'>
            <ComteudoLateral />
        </div>
  {/*Fim Conteudo lateral*/}


        </div>
      </div>
    </div>
  </div>
  </section>
        {/* ***** Special Area End ***** */}

  </div>
    );
  }
}

export default Leitor;
