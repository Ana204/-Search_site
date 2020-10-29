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
                  Pesquisas
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
                <h1>Sobre nós</h1>
                <div className="line-under-title"></div>
                <p>Fundada em 2020, a World atua promovendo e incentivando a sustentabilidade e a re-educação ambiental, acolhendo todos os individuos que se dispoem a participar de nossas pesquisas para o Movimento Verde, para que se unam à nós em prol de um mundo melhor.</p>

                <p>Visamos sempre o bem-estar das pessoas e do nosso planeta, compartilhando conhecimentos valiosos e dicas que fazem toda a diferença. Fazemos uso das opiniões dos voluntários para conhecer melhor a conscientização de cada um e cada vez mais expandir o alcance do nosso movimento. </p>

                <h1 className="second-title">O Movimento Verde</h1>
                <div className="line-under-title"></div>

                <p>Podemos resumir o Movimento Verde em quatro palavras: Reduzir, Reutilizar e Reciclar. Também conhecidas como os três R's da sustentabilidade, seu objetivo é minimizar o impacto ambiental causado pelo desperdício de materiais e descarte inadequado dos mesmos. </p>

                <p>Mas você deve estar se perguntando: "E a quarta palavra?", e aqui está: O quarto R, Repensar. Acima de tudo, buscamos sempre abrir mais olhos e conscientizar cada vez mais pessoas sobre a preservação do meio ambiente, e tudo começa repensando as nossas ações para com ele. Todos podem participar, sem nenhum custo. Muito pelo contrário... com muitos benefícios.</p>

                <p>E aí, o que está esperando para participar? Contribua você também!</p>


              </div>

            </div>
         </div>
         {/*<footer></footer>*/}
         <div className="card" style={{width: "18rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap"/>
          <div className="card-body">
          <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
     </Container>
  );
}

export default Home;