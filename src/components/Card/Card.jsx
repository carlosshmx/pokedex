import axios from "axios";
import { useEffect, useState } from "react";
import cardStyle from './card.module.css';
import {upperFirstLetter} from "../../Utils/letters";
import { useNavigate } from "react-router-dom";

const Card = (props) => {

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${props.id}`);
        setPokemon(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []); 
  return (
    <>{!loading ? (
      <div className={cardStyle.cardContainer} onClick={()=>navigate(`/pokedex/${pokemon.id}`)}>
          <img src={pokemon.sprites.front_default} alt="" />
          <div className={cardStyle.desc}>
            <p>#{pokemon.id}</p>
            <p>{upperFirstLetter(pokemon.name)}</p>
          </div>
      </div>
    ):null
    }
    </>
    
  )
}

export default Card