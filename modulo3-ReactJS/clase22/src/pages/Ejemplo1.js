import { Ejemplo1Props, Ejemplo2Props, Ejemplo3Props, Ejemplo4Props, Ejemplo5Props} from "../components/props/Props";



const nombre2='Mili'
const lista = ['manzana', 'banana', 'mandarina', 'frutilla'];
const mostrarValor = valor => {
    console.log(valor)
}

const Ejemplo1 = props => {
    return (
        <div>
            <h1>Ejemplos de Propiedades</h1>
            <Ejemplo1Props nombre='Nuria' />
            <Ejemplo1Props nombre={nombre2} />
            <hr/> {/*separo con una linea*/}

            {/*ejemplo lista de elementos*/}
            <Ejemplo2Props elementos={lista}/>
            <hr/>
        
            <Ejemplo3Props titulo="La Noticia" subtitulo="soy el subtitulo" cuerpo="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
            <hr/>
            <Ejemplo4Props cambiarValor={mostrarValor} />
            <hr/>
            <Ejemplo5Props eventoClick={mostrarValor} />


        </div>
    )
}

export default Ejemplo1;
