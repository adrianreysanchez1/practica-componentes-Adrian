type Props ={
    title: string;
    description: string;
    price: number | 0;
    label: "Popular" | "Nuevo" | "Intermedio";
    tituloDescripcion: string;
    handleClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export default function Etiquetas({title, description, price, label, tituloDescripcion, handleClick}: Props){

    let claseEtiqueta = "";
    if(label === 'Popular'){
        claseEtiqueta= "px-2 py-1 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-700";
    }else if(label=== 'Nuevo'){
        claseEtiqueta = "px-2 py-1 text-xs font-semibold rounded-full bg-sky-100 text-sky-700";
    }else if(label = 'Intermedio'){
        claseEtiqueta = "px-2 py-1 text-xs font-semibold rounded-full bg-amber-100 text-amber-700";
    }
    return(
            <article className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 flex flex-col">
            <div className="flex items-start justify-between mb-3">
                <h2 className="text-lg font-semibold">{title}</h2>
                <span className={claseEtiqueta}>
                    {label}
                    </span>
            </div>
            <p className="text-sm text-slate-600 mb-4">
                {description}
            </p>
            <div className="mt-auto flex items-center justify-between">
                <span className="text-base font-bold text-slate-900">{price} €</span>
                <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-xs font-medium hover:bg-blue-700" onClick={handleClick}>
                {tituloDescripcion}
                </button>
            </div>
            </article>
    )
}