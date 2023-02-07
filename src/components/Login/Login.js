import React from "react";


const Login = () => {
    return (
        <div className="w-full flex items-center flex-col">
          <p className="text-white text-5xl">¡Bienvenido!</p>
          <p className="text-white text-xl mb-16">Ingresa</p>
      
          <div className="flex w-1/3">
            <form
              className="flex w-full items-center justify-center flex-col space-y-8"

            >
              <div className="w-full">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="input-register"
            
                />
              
              </div>
  
  
              <div className="w-full">
                <input
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  className="input-register"
             
                />
               
              </div>
  
  
              <button
                className="btn-register"
                type="submit"
              >
                Ingresar
              </button>
            </form>
          </div>
        </div>
    );
  };
  export default Login;