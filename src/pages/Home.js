import React from "react"
import { Link } from "react-router-dom"


const Home = () => {
    return (
        <>
            <h1>Pagina Inicial</h1>
            <ul>
                <li>
                    <Link to="/users"> Users </Link>
                </li>
            </ul>
        </>
    )

}

export default Home