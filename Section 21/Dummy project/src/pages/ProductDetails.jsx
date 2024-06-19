import React from 'react'
import { useParams } from 'react-router'

function ProductDetails() {
    const { id } = useParams();

    console.log(id)
    return (
        <>
            <div>ProductDetails</div>
            <p>{id}</p>
        </>
    )
}

export default ProductDetails