import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import customFetch from "../utils/customFetch";
import ItemDetail from "./ItemDetail";
import products from "../utils/products" 

const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(500, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;