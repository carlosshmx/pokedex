import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "../Card/Card";


export const Generations = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [generations, setGenerations] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/`);
        setGenerations(response.data);
        console.log(generations);
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
      <ul>
        {generations.results.map((gen,index)=>(<Link to={`../generations/${index+1}`} key={index}>{gen.name}</Link>))}
      </ul> 
    ):(
      <h2>Cargando...</h2>
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

  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/generation/${id}`);
        setGeneration(response.data);
        console.log(generation);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        navigate("/error")
      }
    };
    fetchData();
  }, []); 

  return(
    <>
      {!loading ? (
        <>
        <ul>
          {generation.pokemon_species.map((pokemon, index)=>(<Card key={index} id={pokemon.name}/>))}
        </ul>
        </>
        
      ):(
        <h2>Cargando...</h2>  
      )}
    </>
  )
}

