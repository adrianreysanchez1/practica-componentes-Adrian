export default function PanelNotificaciones(){
    return(
        <>
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4">Notificaciones</h1>

        <div className="space-y-3">
            <div className="flex items-start gap-3 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-emerald-500"></div>
            <div className="flex-1">
                <p className="text-sm text-emerald-900">
                Cambios guardados correctamente.
                </p>
                <p className="text-xs text-emerald-700 mt-1">
                Hace 2 minutos
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-amber-500"></div>
            <div className="flex-1">
                <p className="text-sm text-amber-900">
                Tienes tareas pendientes por revisar.
                </p>
                <p className="text-xs text-amber-700 mt-1">
                Hace 10 minutos
                </p>
            </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-sky-200 bg-sky-50 px-3 py-2">
            <div className="mt-1 h-2 w-2 rounded-full bg-sky-500"></div>
            <div className="flex-1">
                <p className="text-sm text-sky-900">
                Nuevo mensaje del profesor en el foro.
                </p>
                <p className="text-xs text-sky-700 mt-1">
                Hace 30 minutos
                </p>
            </div>
            </div>
        </div>
    </div>
        </>
    )
}