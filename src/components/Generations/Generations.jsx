import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "../Card/Card";
import genStyles from './generations.module.css'
import Loading from "../Loading/Loading";
import { startersPokemon } from "../../Utils/Pokemon";


export const Generations = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generations, setGenerations] = useState(null);
  const [starters, setStarters] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const generationsGet = await axios.get(`https://pokeapi.co/api/v2/generation/`);
        setGenerations(generationsGet.data);


        // const imagesGet = 
        //   startersPokemon.forEach((generation)=>
        //     generation.forEach(async(pokemon,index)=>
        //       await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon[index]}`) 
        //     )
        //   )
  
        // setStarters(imagesGet);

        // console.log(starters);

        const fetchStarters = async () => {
          try {
            const allStartersData = await Promise.all(
              startersPokemon.map(async (generation) => {
                const pokemonDataPromises = generation.starters.map(async (pokemon) => {
                  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
                  return response.data;
                });
    
                const pokemonData = await Promise.all(pokemonDataPromises);
                return {
                  generation: generation.gen,
                  starters: pokemonData,
                };
              })
            );
    
            setStarters(allStartersData);
          } catch (error) {
            console.error("Error fetching starter Pokémon data:", error);
          }
        };
    
        fetchStarters();
        console.log(starters);

        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        navigate("/error")
      }
    };
    fetchData();
  }, []); 

  

  return (
    <>
    {!loading ? (
      <div className={genStyles.containerGens}>
        <ul className={genStyles.listGens}>
          {generations.results.map((gen,index)=>(
            <Link to={`../generations/${index+1}`} key={index}>  
            {startersPokemon[index].gen} Generation 
            <div> 
              <ul>
                {/* {starters.map((pokemon))} */}
              </ul>
            </div>    
            </Link>))}
        </ul> 
      </div>
      
    ):(
      <Loading/>
    )
      

    }
      
    </>
  )
}

export const GenerationsID = ()=>{
  const {id} = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generation, setGeneration] = useState(null);
  const [pokemonPokedex, setPokemonPokedex] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
        setGeneration(response.data);

        //Obetenemos los pokemon de esa generación aunque estan desordenados y no tienen ID
        let pokemonList = response.data.pokemon_species; //

        //Asignamos a una constante el llamado a api de pokemon buscados por nombre, aca nos traemos el ID
        //Usamos Promise.allSettled para esperar que se cumplan todas las promesas axios antes de asignar (En caso de no cumplirse no se detiene)
        const pokemonDetails = await Promise.allSettled(
          pokemonList.map(async pokemon => {
            try {
              const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
              return response.data; // Devuelve los datos si la solicitud es exitosa
            } catch (error) {
              console.error(`Error fetching data for ${pokemon.name}:`, error);
              return null; // Devuelve null si ocurre un error, para que puedas filtrar después
            }
          })
        );

        //Guarda en un arra y filtra las respuestas con datos
        let pokedexData = pokemonDetails
        .filter(result => result.status === 'fulfilled' && result.value !== null)
        .map(result => result.value);

        //Ordenapor Id
        pokedexData.sort((a,b)=>a.id - b.id);

        setPokemonPokedex(pokedexData);

        setLoading(false);

      } catch (error) {
        setError(error);
        console.log(error);
        navigate("/error")
      }
    };
    fetchData();
  }, [id, navigate]); 

  return(
    <>
      {!loading ? (
        <>
        {console.log(pokemonPokedex)}  
        <div className={genStyles.listPokeContainer}>
          <h2>Generation {generation.id}</h2>
          <ul className={genStyles.listPoke}>
            {pokemonPokedex.map((pokemon, index)=>(<Card key={index} id={pokemon.name}/>))} 
          </ul> 
        </div>
        
        </>
         
      ):(
        <Loading/>    
      )}
    </>
  )
}

