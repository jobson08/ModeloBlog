import React, {Component} from 'react'

class ComteudoLateral extends Component{
  render(){
    return(
      <div>
      <div className='conte-lateral col-md-12'>
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
                <i className='fa fa-twitter'></i>
                <p className='mb-0'> Twitter</p>
            </a>
        </div>

    <div className='social-Whatsapp-btn wow fadeInDown' data-wow-delay='0.4s'>
        {/*Apple Store Btn */}
        <a href='#'>
            <i className='fa fa-whatsapp'></i>
            <p className='mb-0'> Whatsapp</p>
        </a>
    </div>
</div>


    <div className=''>
    <div className='section-lateral text-center'>
        <h1>Mais Lidas</h1>
    </div>

    <div className='row col-md-12'  >

    <a href='#' className='cont-infor-lateral row'>
    <div className="col-md-10">
    <div className="single-team-member">
    <div className="member-image">
      <img src="img/team-img/team-1.jpg" alt=""/>
      <div className="team-hover-effects">
      </div>
    </div>
    <div className="member-text">
      <h4>Jackson Nash</h4>
      <p>Tax Advice</p>
    </div>
    </div>
    </div>
    </a>

    <a href='#' className='cont-infor-lateral row'>
    <div className="col-md-10">
    <div className="single-team-member">
    <div className="member-image">
    <img className='img-fluid 'src='img/bg-img/welcome-img.png' alt=''/>
    <div className="team-hover-effects">
    </div>
    </div>
    <div className="member-text">
    <h4>Jackson Nash</h4>
    <p>Tax Advice</p>
    </div>
    </div>
    </div>
    </a>

    </div>
    </div>
    </div>

    {/*Fim Conteudo lateral*/}
    </div>
    );
  }
}

export default ComteudoLateral;
