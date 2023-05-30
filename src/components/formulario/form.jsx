import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage, validateYupSchema } from 'formik';

// import {Link} from 'react-router-dom'
import Styles from './form.module.css';



function Formulario(){

    const[formularioEnviado, cambiarFormularioEnviado] = useState(false);

    const enviarDatos = (formValues, {resetForm}) =>{
        console.log(formValues);
        resetForm();
        // funcion que no es visible
    }


    return(
        //esto si va a aparecer
        <>
        <div className={Styles.responsive} >

            <div className={Styles.title}>

            <h1>CODEGENIUS</h1>
            <p id={Styles.pForm} >No necesitas ser un genio para programar!!</p>

            </div>
          
            <div>
       
 
            <Formik
                initialValues={{
                    name: "",
                    lastname: "",
                    email: "",
                    date:"",
                    perfil:""
                }}

                validate={(enviarDatos) =>{

                    let errores ={};
                    if(!enviarDatos.name){
                        errores.name ='Por favor ingresa un nombre'
                    }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(enviarDatos.name)){
                        errores.name ='El nombre solo puede contener letras y espacios'
                    }


                    if(!enviarDatos.lastname){
                        errores.lastname ='Por favor ingresa un apellido'
                    }else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(enviarDatos.lastname)){
                        errores.lastname ='El apellido solo puede contener letras y espacios'
                    }


                    if(!enviarDatos.email){
                        errores.email ='Por favor ingresa correo'
                    }else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(enviarDatos.email)){
                        errores.email ='Correo Invalido'
                    }
     

                    return errores;
                }}
                onSubmit={(enviarDatos) =>{
                   cambiarFormularioEnviado(true);
                   setTimeout(() => cambiarFormularioEnviado(false), 3000)
                   resetForm();

                //    cambio2
                }}
                
                
            >
                {({ errors} ) =>(
                    
                    
                    <Form>
                        
                    <div >
                  
                    <Field
                   
                     name="name" 
                     type="text"
                     placeholder="Ingresa tu Nombre"
                     
                     
                     />
                     <ErrorMessage name="name" component={() =>(
                        <div className="error" style={{ fontSize: '12px', color: 'white'}} >{errors.name}</div>
                     )} />
                     </div>

                     <div>
                     <Field 
                 
                     name="lastname" 
                     type="text"
                     placeholder="Ingresa tu Apellido"
                     
                     />
                    <ErrorMessage name="lastname" component={() =>(
                        <div className="error" style={{ fontSize: '12px', color: 'white'}} >{errors.lastname}</div>
                     )} />

                    </div>
 
                    <div> 
                     <Field 
                 
                     name="email" 
                     type="email"
                     placeholder="Ingresa tu Correo"
                     
                     />

                    <ErrorMessage name="email" component={() =>(
                        <div className="error" style={{ fontSize: '12px', color: 'white'}} >{errors.email}</div>
                     )} />

                    </div>

                    <div  className={Styles.cssField} >  
                    <div>
                        
                     <Field 
                    
                     name="date" 
                     type="date"
                     placeholder=""
                     />
                    </div>

                    {/* cambio1 */}
                    <div >
                   
                     <Field 
                     className={Styles.opField}
                     component="select" 
                     name="perfil"
                     placeholder="Perfil"
                     
                     >
                        <option>Perfil</option>
                         <option value={"E"}>Estudiante</option>
                         <option value={"P"}>Profesor</option>
                         <option value={"A"}>Aventurero</option>
                         <option value={"EM"}>Emprendedor</option>

                       
                     </Field>    
                    </div>
                     

                    
                    </div>
                   
                

                    <button  type='submit'>Registrarse</button>
                    {formularioEnviado && <p className='enviado'>Formulario enviado con exito!</p>}
                </Form>
                )}
      
            </Formik>
            </div>
            </div>
        </>
    )
}

export default Formulario;