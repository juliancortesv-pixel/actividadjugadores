export default function campos({etiqueta, tipo, holder}){
    return(
        <div>
            <label campos hmtlFor={etiqueta}>{etiqueta} </label>
            <input id={etiqueta} name={etiqueta} type={tipo} placeholder={holder} />
        </div>
    )
}
