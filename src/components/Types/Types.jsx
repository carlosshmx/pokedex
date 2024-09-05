import { types } from "../../Utils/Pokemon"
import { upperFirstLetter } from "../../Utils/letters"
import style from "./types.module.css"

const Types = () => {
  return (
    <>
        <div className={style.listHeader}>
            <h2>Types</h2>
        </div>

        <div className={style.typesContainer}>
            <ul>
                {types.map((type, index)=>(
                    <li key={index}>
                        <img src={type.img} alt={type.name} />
                        <h3>{upperFirstLetter(type.name)}</h3>
                    </li>))}
            </ul>
        </div>
       
    </> 
  )
}

export default Types