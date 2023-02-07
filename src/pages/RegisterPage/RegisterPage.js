import React, { useState } from "react";
import Login from "../../components/Login/Login";
import Register from '../../components/Register/Register'


const RegisterPage = () => {

  const [comp, setComp] = useState(true);

  return (
    <div className="h-screen flex">
      <div className="w-3/5 bg-font2 bg-cover bg-center">
      </div>
      <div className="w-full h-auto bg-grayOne flex justify-center flex-col">
        {
          comp
            ? <Register></Register>
            : <Login></Login>
        }
        <div className="flex flex-col my-4 w-full">
          <button className="text-white hover:text-alert" onClick={() =>setComp(!comp)}>{comp ? 'Iniciar Sesion' : 'Registrarme'}</button>
        </div>
      </div>
      
      
    </div >
  );
};
export default RegisterPage;