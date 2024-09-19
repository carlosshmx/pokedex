import { types } from "../../Utils/Pokemon"
import { upperFirstLetter } from "../../Utils/letters"
import style from "./types.module.css"
import { Link } from "react-router-dom"

const Types = () => {
  return (
    <>
        <div className={style.listHeader}>
            <h2>Types</h2>
        </div>

        <div className={style.typesContainer}>
            <ul>
                {types.map((type, index)=>(
                    <Link to={`../types/${type.name}`}  key={index}>
                        <img src={type.img} alt={type.name} />
                        <h3>{upperFirstLetter(type.name)}</h3>
                    </Link>))}
            </ul>
        </div>
       
    </> 
  )
}

export default Types