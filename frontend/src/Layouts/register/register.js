import React, {useState} from 'react'
import '../../Layouts/register/register.css'
import FormQuestion from '../../components/FormQuestion'


const Register =()=>{
    return(
      <div className="gradiente">
         <div className="container">
            <h2> Cadastrar nova pesquisa </h2> 
            <div>
               <FormQuestion/>
            </div>
            <button className="btn--enviar">Enviar</button> 
         </div>
      </div>
    )
}

export default Register;