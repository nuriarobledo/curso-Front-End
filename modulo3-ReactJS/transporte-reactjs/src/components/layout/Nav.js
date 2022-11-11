import '../../styles/nav.css';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav>
            <ul className="holder">
                <li><Link to="/">Home</Link></li>
                <li><Link to="nosotros.html">Nosotros</Link></li>
                <li><Link to="servicios.html">Servicios</Link></li>
                <li><Link to="galeria.html">Galeria</Link></li>
                <li><Link to="contacto.html">Contacto</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
