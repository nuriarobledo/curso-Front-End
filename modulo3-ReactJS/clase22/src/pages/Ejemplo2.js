import {Ejemplo1Estado, Ejemplo2Estado} from "../components/estado/Estado";
//PONEMOS EL CSS ACA PQ EJEMPLO2 ES EL Q VA RECOPILANDO TODA LA INFO
import '../styles/estilos.css'
const Ejemplo2 = props => {
    return (
        <div>
            <h1>Ejemplo Estados</h1>
            <Ejemplo1Estado/>
            <hr/>
            <Ejemplo2Estado/>
        </div>

    )
}

export default Ejemplo2;