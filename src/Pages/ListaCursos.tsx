import Etiquetas from "@/Components/Etiquetas";


export default function ListaCursos(){
    return(
        <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Etiquetas title="React desde cero" description="Aprende los fundamentos de React, componentes, props y estado." price={49.99}
            label="Intermedio" tituloDescripcion="Ver detalles" handleClick={(e =>{
                e.preventDefault();
                alert("Se ha guardado React desde cero");
            })}></Etiquetas>

            <Etiquetas title="Tailwind CSS práctico" description="Utiliza utilidades de Tailwind para maquetar interfaces rápidas." price={39.99}
            label="Nuevo" tituloDescripcion="Ver detalles" handleClick={(e =>{
                e.preventDefault();
                alert("Se ha guardado Tailwind CSS práctico");
            })}></Etiquetas>

            <Etiquetas title="JavaScript avanzado" description="Profundiza en asincronía, closures y patrones de diseño." price={59.99}
            label="Popular" tituloDescripcion="Ver detalles" handleClick={(e =>{
                e.preventDefault();
                alert("Se ha guardado JavaScript avanzado");
            })}></Etiquetas>
        </div>
        </>
    )
}