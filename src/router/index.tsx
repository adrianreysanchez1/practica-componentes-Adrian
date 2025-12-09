import GaleriaBotones from "@/Pages/GaleriaBotones";
import ListaCursos from "@/Pages/ListaCursos";
import {createBrowserRouter} from "react-router-dom";



export const router = createBrowserRouter([
   {path: "/" , element: <GaleriaBotones/>},
   {path: "/lista-cursos" , element: <ListaCursos/>},

]);