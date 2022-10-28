import CartWidget from "./CartWidget";
import logo from "../img/logo.png";

const NavBar= () => {
    return (
        <>
            <header className = "header">
                <a href="../App.js"><img src = {logo} className = "logo" alt = "logo"/></a>    
                <ul className = "navBar">
                    <li><a href="../App.js">Inicio</a></li>
                    <li><a href="../App.js">Productos</a></li>
                    <li><a href="../App.js">Contacto</a></li>
                </ul>
                <div className = "cart"><a href = "../App.js"><CartWidget/></a></div>
            </header>
        </>
    )
};

export default NavBar;