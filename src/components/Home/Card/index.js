import React from "react"

const Card = ({
    id, title, price
}) => {
    const handleClick = (x) =>{
        console.log(x)
    }
    return(
        <>
        <div className="card" key={id}>
            <p>{id}</p>
            <p>Name: ${title}</p>
            <p>Price: ${price}</p>
            <button onClick={ () => handleClick({title})}>click on me</button>
        </div>
        </>
    )
}
export default Card;