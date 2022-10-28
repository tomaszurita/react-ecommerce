import { FaCartPlus } from 'react-icons/fa';

const Header = () => {
    return (
        <>
            <header className = "header">
              <p>logo</p>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <FaCartPlus/>
            </header>
        </>
    )
};

export default Header;