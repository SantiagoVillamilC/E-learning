import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Styles from "./form.module.css";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


function Formulario() {

  const MySwal = withReactContent(Swal)

  const [values, setValues] = useState({});

  const enviarDatos = (formValues, { resetForm }) => {
    resetForm();

    MySwal.fire({
        title: <p>Formulario Enviado con Exito</p>,
        didOpen: () => {
          // `MySwal` is a subclass of `Swal` with all the same instance & static methods
          MySwal.showLoading()
        },
        timer: 3000 
      })
  };

  return (
    <>
      <div className={Styles.responsive}>
        <div className={Styles.title}>
          <h1>
            CODEGENIUS<span style={{ color: "#FD6584" }}>_</span>
          </h1>
          <p id={Styles.pForm}>No necesitas ser un genio para programar!!</p>
        </div>

        <div>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
              date: "",
              perfil: "",
            }}
            validate={(enviarDatos) => {
              let errores = {};
              if (!enviarDatos.name) {
                errores.name = "Por favor ingresa un nombre";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(enviarDatos.name)) {
                errores.name =
                  "El nombre solo puede contener letras y espacios";
              }

              if (!enviarDatos.lastname) {
                errores.lastname = "Por favor ingresa un apellido";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(enviarDatos.lastname)) {
                errores.lastname =
                  "El apellido solo puede contener letras y espacios";
              }

              if (!enviarDatos.email) {
                errores.email = "Por favor ingresa correo";
              } else if (
                !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                  enviarDatos.email
                )
              ) {
                errores.email = "Correo Invalido";
              }

              return errores;
            }}
            onSubmit={enviarDatos}
          >
            {({ errors }) => (
              <Form>
                <div>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Ingresa tu Nombre"
                  />
                  <ErrorMessage
                    name="name"
                    component={() => (
                      <div
                        className="error"
                        style={{ fontSize: '15px', color: 'black' }}
                      >
                        {errors.name}
                      </div>
                    )}
                  />
                </div>

                <div>
                  <Field
                    name="lastname"
                    type="text"
                    placeholder="Ingresa tu Apellido"
                  />
                  <ErrorMessage
                    name="lastname"
                    component={() => (
                      <div
                        className="error"
                        style={{ fontSize: '15px', color: 'black' }}
                      >
                        {errors.lastname}
                      </div>
                    )}
                  />
                </div>

                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Ingresa tu Correo"
                  />

                  <ErrorMessage
                    name="email"
                    component={() => (
                      <div
                        className="error"
                        style={{ fontSize: '15px', color: 'black' }}
                      >
                        {errors.email}
                      </div>
                    )}
                  />
                </div>

                <div className={Styles.cssField}>
                  <div>
                    <Field name="date" type="date" placeholder="" />
                  </div>

                  <div>
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

                <button type="submit">Registrarse</button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default Formulario;
