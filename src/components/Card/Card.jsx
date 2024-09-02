import axios from "axios";
import { useEffect, useState } from "react";
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
        console.log(pokemon);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPokemon();
  }, []); 
  return (
    <>{!loading ? (
      <div onClick={()=>navigate(`/pokedex/${props.id}`)}>
          <div>
            <img src={pokemon.sprites.front_default} alt="" />
          </div>
          <div>
            <p>{pokemon.id}</p>
            <p>{pokemon.name}</p>
          </div>
      </div>
    ):null
    }
    </>
    
  )
}

export default Card