import React from 'react';
import Wave from './img/waves.png';
import Logo from './img/logo.png'

import { Container, WaveImg, LogoImage } from './styles';

function Home() {
  return (
     <Container>
         <div className="Top-part">
            <div className="content-wraper">
                <LogoImage src={Logo} alt="Logo word" />
                <div className="Info">
                  <h1>COM SUA AJUDA PODEMOS SALVAR O PLANETA</h1>
                  <h4>Faca a sua parte, ajude a fazer um mundo melhor com sua opiniao.</h4>
                </div>
                <div class="btn_enter">
                  Pesquisar
                </div>

            </div>

            <WaveImg src={Wave} alt="image waves"/>
            <WaveImg src={Wave} alt="image waves"/>
            <WaveImg src={Wave} alt="image waves"/>
         </div>
         <div className="Bottom-part">

         </div>
     </Container>
  );
}

export default Home;