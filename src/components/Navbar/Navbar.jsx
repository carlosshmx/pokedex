import { useState } from "react";
import NavbarStyle from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { usePokemonStates } from "../../Context/Context";

const Navbar = () => {

  const {pokeId} = usePokemonStates();

  const navigate =useNavigate()
  const [id, setId] = useState('');

  const handleChangeSeach = (e)=>{
    setId(e.target.value);

  }



  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/pokedex/${id}`);
    setId('')
  }

  return (
    <>
      <form className={NavbarStyle.container} onSubmit={handleSubmit}>
        <ul className={NavbarStyle.list}>
          <li className={NavbarStyle.logo}><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" />Pokedex</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/generations">Generations</Link></li>
          <li><Link to={`/pokedex/${pokeId}`}>Pokedex</Link></li>
          <li><input type="text" placeholder="name or number" role="textbox" onChange={handleChangeSeach} value={id} required/><button type="submit">Seach</button></li>
        </ul>
      </form>
    </>
  )
}

export default Navbar;