import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Home() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/products")
    }
    return (
        <>
            <h1>My home page</h1>
            <p>Go to <Link to="/products">The list of products</Link></p>
            <button onClick={handleClick}>Goooooooo</button>
        </>
    )
}

export default Home