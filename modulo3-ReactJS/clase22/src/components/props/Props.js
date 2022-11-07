const Ejemplo1Props = props => {
    return (
        <h3>Hola {props.nombre}</h3>
    )
}
const Ejemplo2Props = props => {
    const {elementos} =props;
    return (
        <ul>
            {elementos.map(elemento => <li key={elemento}>{elemento}
            </li>)}
        </ul>
    )
}
const Ejemplo3Props = ({titulo,subtitulo,cuerpo}) =>{
    return(
        <div>
        <h3>{titulo}</h3>
        <h4>{subtitulo}</h4>
        <p>{cuerpo}</p>
        </div>
    )
}
// cuando ejecutamos el evento OnChange
// el input va a tomar lo q sucede en la funcion cambiarValor
// entonces recibimos la propiedad de cambiarValor

const Ejemplo4Props = props => {
    return (
        <label>ver en consola: <input type="text" onChange={(e) =>
        props.cambiarValor(e.target.value) } />
        </label>
    )
}
const Ejemplo5Props = props => {
    const handleClick = e =>{
        // if > validar q esten pasando la propiedad (prop) q necesito (eventoClick)
        if (props.eventoClick){
            // si la estoy pasando sale m clickeaste
            props.eventoClick('Me Clickeaste');
        }
    }
    return (
        <p>
            <button onClick={handleClick}>CLICKEAME!</button>
        </p>
    )
}
export{
    Ejemplo1Props,
    Ejemplo2Props,
    Ejemplo3Props,
    Ejemplo4Props,
    Ejemplo5Props
}