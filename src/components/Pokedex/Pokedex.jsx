import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './pokedex.module.css'
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { upperFirstLetter } from '../../Utils/letters';
import { usePokemonStates } from '../../Context/Context';

const Pokedex = () => {
  const { pokemonInfo, pokeId, setPokeId, loading} = usePokemonStates();
  const {id} = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const currentID = pokemonInfo.id

  const nextPokemon = ( )=>{
    if(currentID < 1025){
      setPokeId(currentID+1)
      navigate(`/pokedex/${currentID+1}`)
    }
  }

  const prevPokemon = ( )=>{
    if(currentID > 1){
      setPokeId(currentID-1)
      navigate(`/pokedex/${currentID-1}`)
    }
    
  }

  useEffect(() => {
    setPokeId(id);
  }, [id]); 


  return (
    <>
    {!loading ? (
      <div className={styles.redBigSquare}>
      <div className={styles.leftPanel}>
        <div className={styles.whiteFrame}>
            <div className={styles.leftScrren}>
                <img src={pokemonInfo.sprites.other.home.front_default}/>
            </div>
        </div>
        <div className={styles.buttonContainer}>
          <div className={styles.miniScreen}>
            <p>{upperFirstLetter(pokemonInfo.name)}</p>
            <p>#{pokemonInfo.id}</p>
          </div>
          <div>
            <button className={styles.bbutton} onClick={prevPokemon}>B</button>
            <button className={styles.abutton} onClick={nextPokemon}>A</button> 
          </div>
          
        </div>
      </div>
        
      <div className={styles.rigthScreen}>
            <h3>Types</h3>
            <p>Main: {pokemonInfo.types[0].type.name}</p>
            {pokemonInfo.types[1] ? <p>Secundary: {pokemonInfo.types[1].type.name}</p> : null}
            <h3>Anatomy</h3>
            <p>Height: {pokemonInfo.height < 10 ? ("0,"+pokemonInfo.height) : (pokemonInfo.height/10)} m</p>
            <p>Weight: {pokemonInfo.weight/10} kg</p>
            <h3>Abilities</h3>
            {pokemonInfo.abilities.map((item, index) => (<p key={index}>{item.ability.name}</p>))}
            <h3>Base Stats</h3>
            {pokemonInfo.stats.map((item, index)=> (<p key={index}>{item.stat.name}: {item.base_stat}</p>))}
      </div>
    </div>
    ):(
     <Loading/>
      )}
    
    </>
  )
}

export default Pokedex