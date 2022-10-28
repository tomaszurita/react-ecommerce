import CartWidget from "./CartWidget";

const NavBar= () => {
    return (
        <>
            <header className = "header">
                <p className = "logo">logo</p>
                <ul className = "navBar">
                    <li><a href="../App.js">Inicio</a></li>
                    <li><a href="../App.js">Productos</a></li>
                    <li><a href="../App.js">Contacto</a></li>
                </ul>
                <div className = "cart"><CartWidget/></div>
            </header>
        </>
    )
};

export default NavBar;