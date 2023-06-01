import { useUserContext, useUserToggleContext } from './userProvider';
import {Formik, Form, Field, ErrorMessage } from 'formik';
// import {useHistory} from 'react-router-dom'
import Styles from './form.module.css';

function Ingresa(){

    // const history = useHistory();
   
    const user = useUserContext();
    const Ingresa = useUserToggleContext();

    const enviarDatos = (formValues, {resetForm}) =>{
   
        resetForm();
        // history.push('/Header');
    
    }

    return(      
        <>
        <div className={Styles.responsive} >

            <div className={Styles.title}>

            <h1>CODEGENIUS<span style={{color: "#FD6584"}}>_</span></h1>
            <p id={Styles.pForm}>No necesitas ser un genio para programar!!</p>

            </div>
          
            <div>
            <Formik
                initialValues={{
                    
                    email: "",
                    password: "",
      
                }}

                validate={(enviarDatos) =>{

                    let errores ={};

                    if(!enviarDatos.email){
                        errores.email ='Por favor ingresa correo'
                    }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(enviarDatos.email)){
                        errores.email ='Correo Invalido'
                    }

                    if(!enviarDatos.password){
                        errores.password ='Por favor ingresa una contraseña'
                    }

                    return errores;
                }}
                onSubmit={enviarDatos}              
                
            >
                {({ errors} ) =>(
                    
                    
                    <Form>
                        
                    <div> 
                     <Field 
                 
                     name="email" 
                     type="email"
                     placeholder="Ingresa tu Correo"
                     
                     />

                    <ErrorMessage name="email" component={() =>(
                        <div className="error" style={{ fontSize: '15px', color: 'black'}} >{errors.email}</div>
                     )} />

                    </div>                   
                
                    <div>
                  
                  <Field
                 
                   name="password" 
                   type="password"
                   placeholder="Ingresa tu Contraseña"
                   
                   />
                   <ErrorMessage name="password" component={() =>(
                      <div className="error" style={{ fontSize: '15px', color: 'black'}} >{errors.password}</div>
                   )} />
                   </div>
                   {/* LINKEAR A TIENDA */}
                   <button onClick={Ingresa}>Ingresa</button>
                   {user && <p>BIENVENID@</p>}
                </Form>
                )}
            </Formik>
            </div>
            </div>
        </>
    )
}

export default Ingresa;
