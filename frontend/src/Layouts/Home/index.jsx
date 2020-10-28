import React from 'react';
import Wave from './img/waves.png';
import Logo from './img/logo.png'
import BlockInfoAbout from '../../components/BlockInfoAbout'

import { Container, WaveImg, LogoImage } from './styles';

//Importing the Icons for About 
import Reciclagem from '../../components/BlockInfoAbout/img/reciclar.png'
import Folha from '../../components/BlockInfoAbout/img/folha.png'
import Baleia from '../../components/BlockInfoAbout/img/baleia.png'

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
            <div className="content-wraper-bottom">
              <div className="content-wraper-bottom-block-info">
                <BlockInfoAbout img={Folha}content="Preservando a natureza"/> 
                <BlockInfoAbout img={Reciclagem}content="Reduzir, Reutilizar, Reciclar"/>
                <BlockInfoAbout img={Baleia}content="Preservando as espécies"/>
              </div>
              <div className="content-about-us">
                <h1>Sobre nois</h1>
                <div className="line-under-title"></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>

            </div>
         </div>
     </Container>
  );
}

export default Home;