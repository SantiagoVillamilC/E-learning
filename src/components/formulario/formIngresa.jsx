import { useUserContext, useUserToggleContext } from './userProvider';
import {Formik, Form, Field, ErrorMessage } from 'formik';
import Styles from './form.module.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Ingresa(){

    const MySwal = withReactContent(Swal)
   
    const user = useUserContext();
    const Ingresa = useUserToggleContext();

    const enviarDatos = (formValues, {resetForm}) =>{
   
        resetForm();

        MySwal.fire({
            title: user && <p>BIENVENID@</p>,
            didOpen: () => {
              
              MySwal.showLoading()
              setTimeout(() => {
                window.location.href = "Header";
              }, 3000);
            }
        }).then((result) => {
                if (result.isConfirmed) {
                  window.location.href = "Header";
                }
         
          });
    
       
    
    };

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
                   
                </Form>
                )}
            </Formik>
            </div>
            </div>
        </>
    )
}

export default Ingresa;
