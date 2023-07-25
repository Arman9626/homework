import { Alldatas } from "./data";

const Card = ({item: {
    id, title, price
}}) => {
    const btnClick = (x) =>{
        console.log(x)
    }
    return(
        <div className="card" key={id}>
        </div>
    )
}
