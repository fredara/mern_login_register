import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';


import { useNavigate } from 'react-router-dom'
import registerService from "../../services/register";

import * as yup from "yup";
const schema = yup.object({
email: yup
    .string()
    .email("Correo no válido")
    .required("Correo tiene que ser obligatorio"),

password: yup.string()
    .matches(/^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/,
    "La Contraseña debe tener como mínimo 8 carácteres, 1 letra en Mayúscula y 1 carácter especial"
    )
    .required("La contraseña es requerida"),

repet_password: yup.string()
    .oneOf([yup.ref("password"), null], "Las contraseñas no coinciden")
    .required("Es necesario que confirme la contraseña"),
}).required();

const Register = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({
      resolver: yupResolver(schema)
    });
    const [show, setShow] = useState({ state: false, dataMessage: '' });
    const handleClose = () => setShow({ state: false, dataMessage: '' });
  
    const onSubmit = data => {
      registerService(data)
        .then((res) => {
          if (res === 200) {
            navigate('/home')
          } else {
            setShow({ state: true, dataMessage: 'Email Ya se Encuentra Registrado' });
            //respuesta cuando falle el servidor
          }
  
        })
    }
  
    return (
        <div className="w-full flex items-center flex-col">
          <p className="text-white text-5xl">¡Bienvenido!</p>
          <p className="text-white text-xl mb-16">Registrate</p>
          {
            show.state
              ? <div className="text-error-alert text-lg mb-16 bg-btnBg text-btnT rounded-md p-2 w-1/2 text-center relative">
                {show.dataMessage}
                <span aria-hidden="true" className="absolute right-4 text-btnT cursor-pointer" onClick={handleClose}>×</span>
              </div>
              : null
          }
          <div className="flex w-1/3">
            <form
              className="flex w-full items-center justify-center flex-col space-y-8"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="w-full">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input-register"
                  {...register("email")}
                />
                {errors.email && <p role="alert" className="text-error-alert">{errors.email?.message}</p>}
              </div>
  
  
              <div className="w-full">
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  className="input-register"
                  {...register("password")}
                />
                {errors.password && <p role="alert" className="text-error-alert">{errors.password?.message}</p>}
              </div>
  
              <div className="w-full">
                <input
                  name="repet_password"
                  type="password"
                  placeholder="Repita Contraseña"
                  className="input-register"
                  {...register("repet_password")}
                />
                {errors.repet_password && <p role="alert" className="text-error-alert">{errors.repet_password?.message}</p>}
              </div>
  
  
              <button
                className="btn-register"
                type="submit"
              >
                Registrar
              </button>
            </form>
          </div>
        </div>
    );
  };
  export default Register;