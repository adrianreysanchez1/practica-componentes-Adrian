type Props ={
    titleActualizado: string;
    titleTiempo: string;
    categoria: "Guardado" | "Pendiente" | "Mensaje";
}

type Title={
    title: string;
}
export default function Notificaciones({titleActualizado, titleTiempo, categoria}: Props){

    let claseCategoria= "";
    let tituloCategoria= "";
    let notificacionCategoria= "";
    let puntoSpan= "";

    if(categoria=== "Guardado"){
        claseCategoria= "flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2";
        tituloCategoria = "text-sm text-emerald-900";
        notificacionCategoria= "text-xs text-emerald-700 mt-1";
        puntoSpan= "mt-1 h-2 w-2 rounded-full bg-emerald-500";
    }else if(categoria=== "Pendiente"){
        claseCategoria= "flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2";
        tituloCategoria= "text-sm text-amber-900";
        notificacionCategoria= "text-xs text-amber-700 mt-1";
        puntoSpan= "mt-1 h-2 w-2 rounded-full bg-amber-500";
    }else if(categoria=== "Mensaje"){
        claseCategoria= "flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2";
        tituloCategoria= "text-sm text-sky-900";
        notificacionCategoria="text-xs text-sky-700 mt-1";
        puntoSpan= "mt-1 h-2 w-2 rounded-full bg-sky-500";
    }
    return(
        <>
        <div className={claseCategoria}>
            <div className={puntoSpan}></div>
            <div className="flex-1">
                <p className={tituloCategoria}>
                {titleActualizado}
                </p>
                <p className={notificacionCategoria}>
                {titleTiempo}
                </p>
            </div>
        </div>
        </>
    )
}

export function TituloPrincipal({title}: Title){
    return(
        <>
        {title}
        </>
    )
}