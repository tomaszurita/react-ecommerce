import React from 'react'
import customFetch from "../utils/customFetch"
import { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import products from "../utils/products" 

const ItemListContainer = ({greeting}) => {

    const [datos, setDatos] = useState([]);
    const {idCategory}= useParams(); 

    useEffect(() => {
        customFetch(500, products)
        .then(result => {
            if(idCategory){
                setDatos(result.filter((item)=> item.category.name === idCategory))
            }else{
                setDatos(result)
            }
        })
        .catch(err => console.log(err))
    },[idCategory]);

    useEffect(() => {
        return (() => {
            setDatos([]);
        })
    }, []);

    return (
    <>
    <div>
        <p>{greeting}</p>
        <ItemList items={datos}/>
    </div>
    </>
  )
}

export default ItemListContainer