import React from 'react';
import './styles.css'

function Form() {
    return (
        <div className="My_Body"> 
            <div className="Container">
            <button className="voltar"> Voltar </button>
                <div className="page-title">
                    <h1>Pesquisa Ambiental</h1>
                    <h5>Responda às questões para concluir a pesquisa:</h5>
                </div>
                <div className="Question">
                    <p>1. O que é Reciclagem?</p>
                <div className="checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Jogar fora o lixo produzido
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Coletar todo tipo de material existente em lixos recicláveis
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Nome dado para todo o processo do lixo após seu descarte
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option4" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Processo de transformação de materiais usados em novos produtos para consumo.
                        </label>
                    </div>
                </div>
                </div>
                
                <div className="Question">
                    <p>2. Como separar corretamente seu lixo?</p>
                <div className="checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Juntar tudo na lixeira, pois os prédios já fazem o trabalho de separação
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                        Separar o lixo orgânico (restos de alimentos, papel sujo e lixo sanitário) dos resíduos sólidos (como plástico, vidro, papel, metal e embalagens longa vida)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Juntar todo tipo de lixo e descartar em ponto de coleta
                        </label>
                    </div>
                </div>
                </div>

                <div className="Question">
                    <p>3. O que é coleta seletiva?</p>
                <div className="checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Processo de separação e recolhimento dos resíduos para o reaproveitamento por meio de reciclagem
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Processo de envio de todo lixo produzido para cooperativas ou entrega para catadores de rua
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            A escolha aleatória do melhor lixo produzido
                        </label>
                    </div>
                    
                </div>
                </div>

                <div className="Question">
                    <p>4. O que fazer com o lixo eletrônico – pilhas, baterias e equipamentos quebrados?</p>
                <div className="checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Recolher, organizar e armazenar em casa o máximo de tempo que der
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Jogar no lixo comum
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Procurar locais específicos para seu descarte
                        </label>
                    </div>
                </div>
                </div>

                <div className="Question">
                    <p>5. Como preservar árvores e florestas?</p>
                <div className="checkbox">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Reciclando papéis, jornais e revistas
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Reutilizando metais e vidros
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option3" checked></input>
                        <label class="form-check-label" for="exampleRadios1">
                            Construindo uma casa na árvore
                        </label>
                    </div>
                </div>
                </div>
                <div className="button">
                    <button type="button" class="btn">Enviar</button>
                </div>
            </div>
        </div>
    );
}

export default Form;