import { startersPokemon } from "../../Utils/Pokemon";
import { Link, useNavigate, useParams } from 'react-router-dom';
import genStyles from './generations.module.css'

const GenerationCard = ({index, starters}) => {
  return (
    <Link to={`../generations/${index+1}`}  className={genStyles.itemGen}>  
    <h3>{startersPokemon[index].gen} Generation </h3>
    <div> 
      <ul> 
        {starters[index].pokemonData.map((pokemon, index) => <img src={pokemon.sprites.other.home.front_default} key={index}/>)}
      </ul>
    </div>    
    </Link>
  )
}

export default GenerationCard
