import React, {useState} from 'react';

// import { Container } from './styles';

function FormQuestion() {

  //iniciando estados
  const [titulo, setTitulo] = useState('')
  const [questao, setQuesta] = useState('')
  const [a, setA] = useState('')
  const [b, setB] = useState('')
  const [c, setC] = useState('')
  const [d, setD] = useState('')
  const [correct, setCorrect] = useState('')
  const [feedback, setFeedback] = useState('')



  function registerApi () {

    let url = 'https://api.sheety.co/be587a93d2a2be688fa695763f9eb574/meioAmbiente/disponiveis';
    
    let body = {
      disponiveis:{
        "title": titulo,
        "question": questao,
        "a": a,
        "b": b,
        "c": c,
        "d": d,
        "correct": correct,
        "feedback": feedback 
      }
    }
    console.log(body)
    
    fetch(url, {
      method: 'post',
      body: JSON.stringify(body)
    })
    .then((res) => console.log(res)).catch(err => console.log(err));

 }



  return (
    <form>
      <div class="form-group">
        <label for="">Insira um título para nova pesquisa</label>
        <input type="text" class="form-control" id="" placeholder="Ex:" onChange={e => setTitulo(e.target.value)} />
      </div>

      <div class="form-group">
        <label for="">Adicionar pergunta</label>
        <input type="text" class="form-control" id="" placeholder="Ex:" onChange={e => setQuesta(e.target.value)} />
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
        <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Resposta certa !!</label>
        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref" onChange={e => setCorrect(e.target.value)}>
          <option selected value="null"></option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
        </select>
      </form>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Feedback</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={e => setFeedback(e.target.value)}></textarea>
        <p>{feedback}</p>
      </div>
      
      <div className="btn btn-danger" onClick={registerApi}> cadastra pergunta </div>
    </form>

  )
}

export default FormQuestion;