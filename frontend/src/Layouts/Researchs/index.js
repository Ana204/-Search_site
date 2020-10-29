import React from 'react';
import './styles.css';
import ImagemWorld from './img/worldverde.jpg';

const Researchs = () => {
    return (
        <div className="fundo-verde">
            <div className="container-branco">
                <h1>Pesquisas disponíveis</h1>
            <div className="area-cards">
            <div class="card" style={{width: "18rem"}} >
                <img class="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                <div class="card-body">
                    <h5 class="card-title">Pesquisa X</h5>
                    <p class="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    <a href="#" class="btn btn-primary">Responder</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}} >
                <img className="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                <div className="card-body">
                    <h5 className="card-title">Pesquisa X</h5>
                    <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    <a href="#" class="btn btn-primary">Responder</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}} >
                <img className="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                <div className="card-body">
                    <h5 className="card-title">Pesquisa X</h5>
                    <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    <a href="#" class="btn btn-primary">Responder</a>
                </div>
            </div>
            <div className="card" style={{width: "18rem"}} >
                <img className="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                <div className="card-body">
                    <h5 className="card-title">Pesquisa X</h5>
                    <p className="card-text">Um exemplo de texto rápido para construir o título do card e fazer preencher o conteúdo do card.</p>
                    <a href="#" class="btn btn-primary">Responder</a>
                </div>
            </div>
            </div> 
            </div>
        </div>
    )
}

export default Researchs

