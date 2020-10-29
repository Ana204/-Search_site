import React, { useEffect, useState }from 'react';
import './styles.css';
import ImagemWorld from './img/worldverde.jpg';
import axios from 'axios'

const Researchs = () => {


    const [dados, setDados] = useState([])


    
    useEffect(() => {

        let url = 'https://api.sheety.co/be587a93d2a2be688fa695763f9eb574/meioAmbiente/disponiveis';

        axios
            .get(url)
            .then((res) => {
                console.log(res.data.disponiveis)
                setDados(res.data.disponiveis)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="fundo-verde">
            <div>Listar</div>
            <div className="container-branco">

                <h1>Pesquisas disponíveis</h1>
            <div className="area-cards">
                {/* LISTANDO TODAS AS PESQUISAS */}
                {
                    dados.map((element) => (
                        <div class="card" style={{width: "18rem"}} >
                            <img class="card-img-top" src={ImagemWorld} alt="Imagem de capa do card"/>
                            <div class="card-body">
                                <h5 class="card-title">{element.title}</h5>
                                <p class="card-text">{element.question}</p>
                                <a href="#" class="btn btn-primary">Responder</a>
                            </div>
                        </div>
                    ))
                }

            </div> 
            </div>
        </div>
    )
}

export default Researchs