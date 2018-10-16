import React, {Component} from 'react'

import Wellcome from '../Components/Wellcome'

class Home extends Component{
  render(){
    return(
      <div>
        <Wellcome />
        {/****** Special Area Start ******/}
          <section className='special-area bg-white section_padding_100' id='about'>
              <div className='foder-topo container fluid'>
                  <div className='row'>
                      <div className='col-md-8'>
                          {/* Section Heading Area */}
                          <div className='section-heading text-center'>
                              <h2>Especialista no Assunto</h2>
                          </div>
                      </div>
                  </div>

                  <div className='row'>
                      {/*Single Special Area */}
                      <a href='#' className='col-12 col-md-4'>
                          <div className='single-special text-center wow fadeInUp' data-wow-delay='0.2s'>
                              <div className='single-icon'>
                                  <i className='ti-mobile' aria-hidden='true'></i>
                              </div>
                              <div className=' col-md-10'>
                                <img src='img/bg-img/client-1.jpg' alt=''/>
                              </div>
                              <h4>Easy to use</h4>
                              <p>We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily</p>
                          </div>
                      </a>
                      {/* Single Special Area */}
                      <a href='#' className='col-12 col-md-4'>
                          <div className='single-special text-center wow fadeInUp' data-wow-delay='0.4s'>
                              <div className='single-icon'>
                                  <i className='ti-ruler-pencil' aria-hidden='true'></i>
                              </div>
                              <div className=' col-md-10'>
                                <img src='img/bg-img/client-2.jpg' alt=''/>
                              </div>
                              <h4>Powerful Design</h4>
                              <p>We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily</p>
                          </div>
                      </a>
                      {/*Single Special Area */}
                      <a href='#' className='col-12 col-md-4'>
                          <div className='single-special text-center wow fadeInUp' data-wow-delay='0.6s'>
                              <div className='single-icon'>
                                  <i className='ti-settings' aria-hidden='true'></i>
                              </div>
                              <div className=' col-md-10'>
                                <img src='img/bg-img/client-3.jpg' alt=''/>
                              </div>
                              <h4>Customizability</h4>
                              <p>We build pretty complex tools and this allows us to take designs and turn them into functional quickly and easily</p>
                          </div>
                      </a>
                  </div>
              </div>

              {/*Special Description Area */}
              <div className='special_description_area mt-130'>
                  <div className='container'>
                    <div className='mt-2 py-3'>
                      <div className='row'>

                        {/*Inicion Post 1*/}
                          <div className='col-md-8'>
                            <div className='conte-post'>
                              <div className='special_description_content'>

                                <a href='#'>
                                <div className='col-md-12'>
                                    <div className='special_description_img'>
                                        <img src='img/bg-img/special.png' alt=''/>
                                    </div>
                                </div>
                                  <h2>Our Best Propositions for You!</h2>
                                  </a>

                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>


                                  <div className='app-download-area'>
                                      <div className='app-download-btn wow fadeInUp' data-wow-delay='0.2s'>
                                          {/*Google Store Btn*/}
                                          <a href='#'>
                                              <i className='fa fa-android'></i>
                                              <p className='mb-0'><span>100</span> Gostei</p>
                                          </a>
                                      </div>
                                      <div className='app-download-btn wow fadeInDown' data-wow-delay='0.4s'>
                                          {/*Apple Store Btn */}
                                          <a href='#'>
                                              <i className='fa fa-apple'></i>
                                              <p className='mb-0'><span>5</span> Não Gostei</p>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                            </div>

                          {/*Fim Post 1*/}

                          {/*Inicion Post 2*/}
                          <div className='conte-post'>
                              <div className='special_description_content'>
                                <a href='#'>
                                <div className='col-md-12'>
                                    <div className='special_description_img'>
                                        <img src='img/team-img/team-1.jpg' alt=''/>
                                    </div>
                                </div>
                                  <h2>Our Best Propositions for You!</h2>
                                  </a>
                                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                                    sed do eiusmod tempor ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit, sed do eiusmod tempor ut labore et
                                    dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>


                                  <div className='app-download-area'>
                                      <div className='app-download-btn wow fadeInUp' data-wow-delay='0.2s'>
                                          {/*Google Store Btn*/}
                                          <a href='#'>
                                              <i className='fa fa-android'></i>
                                              <p className='mb-0'><span>60</span> Gostei</p>
                                          </a>
                                      </div>
                                      <div className='app-download-btn wow fadeInDown' data-wow-delay='0.4s'>
                                          {/*Apple Store Btn */}
                                          <a href='#'>
                                              <i className='fa fa-apple'></i>
                                              <p className='mb-0'><span>2</span> Não Gostei</p>
                                          </a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                        </div>
                          {/*Fim Post 2*/}

                          {/*Inicio Conteudo lateral*/}
                          <div className='conte-lateral col-md-4'>
                        <div className='mb-4'>

                          <div className='section-lateral text-center'>
                              <h1>Redes social</h1>
                          </div>

                            <div className='social-face-btn wow fadeInUp' data-wow-delay='0.2s'>
                                {/*Google Store Btn*/}
                                <a href='#'>
                                    <i className='fa fa-facebook'></i>
                                    <p className='mb-0'> Facebook</p>
                                </a>
                            </div>
                            <div className='social-stagram-btn wow fadeInDown' data-wow-delay='0.4s'>
                                {/*Apple Store Btn */}
                                <a href='#'>
                                    <i className='fa fa-Stagram'></i>
                                    <p className='mb-0'> Stagram</p>
                                </a>
                            </div>
                        </div>

                      <div className=''>
                        <div className='section-lateral text-center'>
                            <h1>Mais Lidas</h1>
                        </div>
                        <div className='row'>

                          <a href='#' className='cont-infor-latera row'>
                          <div className=' col-md-5'>
                              <img className='img-fluid'src='img/bg-img/special.png' alt=''/>
                          </div>
                          <div className='col-md-7'>
                              <p className='mb-1'>Titulo</p>
                              <p className='mb-1'>Imformação</p>
                              <p className='mb-1'>07 outubro</p>
                          </div>
                        </a>

                          <a href='#' className='cont-infor-lateral row '>
                          <div className=' col-md-5'>
                              <img className='img-fluid 'src='img/bg-img/welcome-img.png' alt=''/>
                          </div>
                          <div className='col-md-7'>
                              <p className='mb-1'>Titulo</p>
                              <p className='mb-1'>Imformação</p>
                              <p className='mb-1'>07 outubro</p>
                          </div>
                        </a>

                      </div>
                      </div>
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

export default Home;
