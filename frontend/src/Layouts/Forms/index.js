import React, { useEffect, useState } from 'react';
import './styles.css'
import axios from 'axios'

function Form(props) {

    //Nome da pesquisa que eu quero mostrar
    console.log(props.match.params.pesquisa)

    //Todas as pesquisas
    const [dados, setDados] = useState([])


    useEffect(() => {

        let url = 'https://api.sheety.co/4ab649c7ce6367df9437a288b09ed6f4/disponiveis/disponiveis';

        axios
            .get(url)
            .then((res) => {
                console.log(res.data.disponiveis)
                setDados(res.data.disponiveis)
            })
            .catch(err => console.log(err))
    }, [])



    return (
        <div className="My_Body"> 
            <div className="Container">
                <div className="page-title">

                    {
                        dados.map((pesquisa) => (
                            pesquisa.referencia == props.match.params.pesquisa ? (
                                <h1>{pesquisa.title}</h1>
                            ) : (
                                <></>
                            )
                        ))
                    }
                    


                    <h5>Responda às questões para concluir a pesquisa:</h5>
                </div>

                {
                dados.map((pesquisa) => (
                    pesquisa.referencia == props.match.params.pesquisa? (
                        <div className="Question">
                        <p>{pesquisa.question}</p>
                        <div className="checkbox">
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                   {pesquisa.a}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.b}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.c}
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" checked></input>
                                <label class="form-check-label" for="exampleRadios1">
                                    {pesquisa.d}
                                </label>
                            </div>
                        </div>
                    </div>
                    ):(
                        <></>
                    )
                ))
                }


                
                <div className="button">
                    <button type="button" class="btn">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Form;