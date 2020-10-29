import React from 'react';

// import { Container } from './styles';

function FormQuestion() {
  return (
    <form>
    <div className="titulo">
      <div class="form-group">
        <label for="">Insira um título para nova pesquisa</label>
        <input type="text" class="form-control" id="" placeholder="Ex:" />
      </div>
    </div>


      <div class="form-group">
        <label for="">Adicionar pergunta</label>
        <input type="text" class="form-control" id="" placeholder="Ex:" />
      </div>


      <fieldset class="form-group">
        <div class="row">
          <legend class="col-form-label col-sm-2 pt-0">Respostas</legend>
          <div class="col-sm-10">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
              <label class="form-check-label" for="">
                A
                <input type="text" />
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
              <label class="form-check-label" for="">
                B
               <input type="text" />
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
              <label class="form-check-label" for="">
                C
                <input type="text" />
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios4" value="option4" />
              <label class="form-check-label" for="">
                D
                <input type="text" />
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Feedback</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
    </form>
  )
}

export default FormQuestion;