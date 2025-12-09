import Notificaciones, { TituloPrincipal } from "@/Components/Notificaciones";

export default function PanelNotificaciones(){
    return(
        <>
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">
            <TituloPrincipal title="Notificaciones"/>
        </h1>

        <div className="space-y-3">
            <Notificaciones titleActualizado="Cambios guardado correctamente." titleTiempo="Hace 2 minutos" categoria="Guardado"/>
            <Notificaciones titleActualizado="Tienes tareas pendientes por revisar." titleTiempo="Hace 10 minutos" categoria="Pendiente"/>
            <Notificaciones titleActualizado="Nuevo mensaje del profesor en el foro." titleTiempo="Hace 30 minutos" categoria="Mensaje"/>
        </div>
    </div>
        </>
    )
}