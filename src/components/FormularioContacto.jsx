import React, {useState} from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const FormularioContacto = () => {
    const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
   
  return (
    <>
    <Formik
        initialValues={{
            nombre:'',
            correo:''
        }}
        validate={ (valores) => {
            let errores = {};
            
            //validacion nombre
            if(!valores.nombre){
                errores.nombre = "Por favor ingrese un nombre "
            }else if( !/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre = "El nombre sólo puede contener letras y espacios"
            }

            //Validacion correo 
            if(!valores.correo){
                errores.correo = "Por favor ingrese un correo electrónico "
            }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo = "El correo sólo puede contener letras, números, guion y guión bajo."
            }

            return errores;
        }}
        onSubmit={(valores, {resetForm})=>{
            resetForm();
            console.log("formulario enviado");
            cambiarFormularioEnviado(true);
            setTimeout(() =>cambiarFormularioEnviado(false),5000);
        }}
    >
    {( { errors} ) =>(
        <Form action=''>
        <div>
            <label htmlFor="nombre">Nombre</label>
            <Field className= "my-3"
                type="text" 
                id="nombre" 
                name="nombre" 
                placeholder='Escriba su nombre'     
                />
                <ErrorMessage name="nombre" component={() => (
                    <div>{errors.nombre}</div>  
                )} />

        </div>
        <div>
            <label htmlFor="correo">correo</label>
            <Field className= "my-3"
                type="email" 
                id="correo" 
                name="correo" 
                placeholder='Escriba su Email' 
                />
                <ErrorMessage name="correo" component={() => (
                    <div>{errors.correo}</div>  
                )} />        </div>

    
        <div>
            <Field name="mensaje" as="textarea" placeholder="escriba el mensaje" />
        </div>
        
        <button type='submit'>enviar</button>
        {formularioEnviado && <p>Formulario enviado con éxito!</p>}
    </Form>
    )}
    
    </Formik>
 

    </>    
    )
}

export default FormularioContacto;