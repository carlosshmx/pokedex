import { useContext, createContext, useState, useEffect, useReducer} from "react"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { reducer } from "./reducer";

const PokemonStates = createContext();


export const initialState = {
  totalPokemons: [],
  currentID: 0,
  currentPokemon: []
}


const Context = ({children}) => {
  const [pokemonInfo, setPokemonInfo] = useState({})
  const [pokeId, setPokeId] = useState('1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [state, dispatch] = useReducer(reducer, initialState);

  const navigate = useNavigate();

  // useEffect(()=>{

  // })
 
  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeId}`);
        setPokemonInfo(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        setPokeId('1')
        navigate("/error")
      }
    };
    fetchPokemon();
  }, [pokeId]); 

  return (
    <PokemonStates.Provider value={{pokemonInfo, setPokemonInfo, pokeId, setPokeId, loading}}>
      {children} 
    </PokemonStates.Provider>
  )
}

export default Context;

export const usePokemonStates = () => useContext(PokemonStates);
