import { FaCartPlus } from 'react-icons/fa';
import { Badge } from "@mui/material";
import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {

    const test = useContext(CartContext);

    return(
    <Badge badgeContent={test.calcItemsQty()} color="secondary">
        <FaCartPlus />
    </Badge>
    )
}

export default CartWidget;