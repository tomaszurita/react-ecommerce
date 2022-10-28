import CartWidget from "./CartWidget";

const NavBar= () => {
    return (
        <>
            <header className = "header">
                <p>logo</p>
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
                <CartWidget/>
            </header>
        </>
    )
};

export default NavBar;