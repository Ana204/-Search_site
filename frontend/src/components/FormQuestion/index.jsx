import React, {useState} from 'react';
import './styles.css'

// import { Container } from './styles';

function FormQuestion() {

  //iniciando estados
  const [titulo, setTitulo] = useState()
  const [questao, setQuesta] = useState()
  const [a, setA] = useState()
  const [b, setB] = useState()
  const [c, setC] = useState()
  const [d, setD] = useState()
  const [correct, setCorrect] = useState()
  const [feedback, setFeedback] = useState()

  return (
    <form>
  
        <div class="titulo--pesquisa">
          <label for=""> <h4>Título da pesquisa</h4> </label>  
           <input type="text" className="titulo" id="" placeholder="Ex:" onChange={e => setTitulo(e.target.value)} />
         </div>
      

      <div class="adicionar--pergunta">
        <label for=""> <h4>Adicionar pergunta</h4></label> <br/> 
        <input type="text" class="titulo" id="" placeholder="Ex:" onChange={e => setQuesta(e.target.value)} />
      </div>


      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Respostas</legend>
          <div class="col-sm-10">
            <div class="form-check">
            <label class="form-check-label" for="gridRadios1">
                A
                <input type="text" onChange={e => setA(e.target.value)} />
              </label>
            </div>
            <div class="form-check">
            <label class="form-check-label" for="gridRadios2">
                B
               <input type="text" onChange={e => setB(e.target.value)} />
              </label>
            </div>
            <div class="form-check">
            <label class="form-check-label" for="gridRadios3">
                C
                <input type="text" onChange={e => setC(e.target.value)} />
              </label>
            </div>
            <div class="form-check">
              <label class="form-check-label" for="gridRadios4">
                D
                <input type="text" onChange={e => setD(e.target.value)} />
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      <form class="form-inline">
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Preference</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
          <option selected>Choose...</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </form>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Feedback</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setFeedback(e.target.value)}></textarea>
        <p>{feedback}</p>
      </div>
    </form>
  )
}

export default FormQuestion;