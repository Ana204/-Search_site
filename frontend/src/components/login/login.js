import React from 'react';
import './login.css'

function Login(){
    return(
        <div class="container--aplication" >

        <div class="container--img">
    
        </div>
        
        <div class="container--login">
    
            <div class="login--inter" style={{margin:"auto"}}>
    
              <form>
                  <h1>Login: </h1>
                  <div class="form-group">
                    <label for="exampleInputEmail1">Email:</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" required />
          
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Senha:</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" name="senha" required />
                  </div>
          
                  <button type="submit" class="btn btn-danger">Entrar</button>
                </form>
                
          </div>
        </div>
    
      </div>
    )
}

export default Login;