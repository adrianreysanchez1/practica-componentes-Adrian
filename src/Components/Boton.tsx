import type React from "react";

type Props = {
    titulo: string;
    modo: 'primary' | 'secundary' | 'danger' ;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Boton(props:Props) {

    let claseBoton = "";

    if(props.modo === 'primary'){
        claseBoton ="px-4 py-2 rounded-md bg-blue-600 text-white text-sm font-medium hover:bg-blue-700"
    }else if(props.modo === 'secundary'){
        claseBoton = "px-4 py-2 rounded-md border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50"
    }else if(props.modo === 'danger'){
        claseBoton = "px-4 py-2 rounded-md bg-red-600 text-white text-sm font-medium hover:bg-red-700"
    }
    
    return <button className={claseBoton} onClick={props.handleClick}>
        {props.titulo}
    </button>
}