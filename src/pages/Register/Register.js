import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { useNavigate } from 'react-router-dom'
import registerService from "../../services/register";

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

  const onSubmit = data => {
    //console.log(data);
    registerService(data)
      .then((res) => {
        console.log(res);
        //navigate('/home')
      })
  }

  return (
    <div className="h-screen flex">
      <div className="w-3/5 bg-font2 bg-cover bg-center">
      </div>
      <div className="w-full bg-grayOne flex items-center justify-center flex-col">
        <p className="text-white text-5xl mb-16">¡Bienvenido!</p>
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
    </div >
  );
};
export default Register;