import Loading from "../Loading/Loading";
import Card from "../Card/Card";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams  } from "react-router-dom";
import style from "./types.module.css"
import { upperFirstLetter } from "../../Utils/letters";



const TypesSel = () => {
    const {type} = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [typeInfo, setTypeInfo] = useState([]);


    useEffect(()=>{
        setLoading(true);
        const fetchPokemon = async () => {
        try {
            const response =  await axios.get(`https://pokeapi.co/api/v2/type/${type}`);
            setTypeInfo(response.data)
            setLoading(false);
        }
        catch(error) {
            setError(error);
            console.log(error);
            navigate("/error")
        }
    };
    fetchPokemon();
    }, [])

  return (
    <>
    {!loading ? (
      <>
      <div className={style.listHeader}>
          <h2>Type: {upperFirstLetter(type)}</h2>
        </div>
    <div className={style.listPokeContainer}>
        <ul className={style.listPoke}>
            {typeInfo.pokemon.map((pokemonU, index)=>(<Card key={index} id={pokemonU.pokemon.name}/>))}
        </ul> 
    </div>  
    </> 
       
    ):(
      <Loading/>    
    )}
  </>

 
  )
}

export default TypesSel