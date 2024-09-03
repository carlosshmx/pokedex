import { useContext, createContext, useState, useEffect } from "react"
import axios from 'axios';

const PokemonStates = createContext();

const Context = ({children}) => {
  const [pokemonInfo, setPokemonInfo] = useState({})
  const [pokeId, setPokeId] = useState('1');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
