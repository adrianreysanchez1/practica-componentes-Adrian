import Boton from "@/Components/Boton";

export default function GaleriaBotones(){
    return(
        <>
        <div className="bg-white shadow-lg rounded-xl p-6 max-w-3xl w-full space-y-6">
            <h1 className="text-2xl font-bold">Galería de botones</h1>

            <section className="space-y-3">
                <h2 className="font-semibold">Botones primarios</h2>
                <div className="flex flex-wrap gap-3">
                    <Boton modo="primary" titulo="Guardar cambios" handleClick={(e =>{
                        e.preventDefault();
                        alert("Se ha agregado");
                    })}/>

                    <Boton modo="primary" titulo="Crear cuenta" handleClick={(e =>{
                        e.preventDefault();
                        alert("Se ha agregado");
                    })}/> 
                    
                    <Boton modo="primary" titulo=" Botón ancho completo" handleClick={(e =>{
                        e.preventDefault();
                        alert("Se ha agregado");
                    })}/> 
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="font-semibold">Botones secundarios</h2>
                <div className="flex flex-wrap gap-3">
                    <Boton modo="secundary" titulo="Cancelar"/>

                    <Boton modo="secundary" titulo="Ver Detalles"/>
                </div>
            </section>

            <section className="space-y-3">
                <h2 className="font-semibold">Botones de peligro</h2>
                <div className="flex flex-wrap gap-3">
                    <Boton modo="danger" titulo="Eliminar"/>
                    <Boton modo="danger" titulo="Borrar Cuenta"/>
                </div>
            </section>
        </div>
        </>
    )
}