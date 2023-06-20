import { useContext } from "react";
import { AuthProvider } from "./AuthProvider";

export default function useAuth(){

    return  useContext(AuthProvider);

}