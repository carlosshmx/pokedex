import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pokedex.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { upperFirstLetter } from '../../Utils/letters';

const Pokedex = () => {
  const {id} = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const nextPokemon = ( )=>{
    const currentID = pokemon.id;
    if(currentID < 1025){
      navigate(`/pokedex/${currentID+1}`)
    }
  }

  const prevPokemon = ( )=>{
    const currentID = pokemon.id;
    if(currentID > 1){
      navigate(`/pokedex/${currentID-1}`)
    }
    
  }

  useEffect(() => {
    setLoading(true);
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        console.log(pokemon);
        setLoading(false);
      } catch (error) {
        setError(error);
        console.log(error);
        navigate("/error")
      }
    };
    fetchPokemon();
  }, [id]); 


  return (
    <>
    {!loading ? (
      <div className={styles.redBigSquare}>
      <div className={styles.leftPanel}>
        <div className={styles.whiteFrame}>
            <div className={styles.leftScrren}>
                <img src={pokemon.sprites.other.home.front_default}/>
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.miniScreen}>
            <p>{upperFirstLetter(pokemon.name)}</p>
            <p>#{pokemon.id}</p>
          </div>
          <div>
            <button className={styles.bbutton} onClick={prevPokemon}>B</button>
            <button className={styles.abutton} onClick={nextPokemon}>A</button>
          </div>
          
        </div>
      </div>
        
      <div className={styles.rigthScreen}>
            <h3>Types</h3>
            <p>Main: {pokemon.types[0].type.name}</p>
            {pokemon.types[1] ? <p>Secundary: {pokemon.types[1].type.name}</p> : null}
            <h3>Anatomy</h3>
            <p>Height: {pokemon.height < 10 ? ("0,"+pokemon.height) : (pokemon.height/10)} m</p>
            <p>Weight: {pokemon.weight/10} kg</p>
            <h3>Abilities</h3>
            {pokemon.abilities.map((item, index) => (<p key={index}>{item.ability.name}</p>))}
            <h3>Base Stats</h3>
            {pokemon.stats.map((item, index)=> (<p key={index}>{item.stat.name}: {item.base_stat}</p>))}
      </div>
    </div>
    ):(
     <Loading/>
      )}
    
    </>
  )
}

export default Pokedex