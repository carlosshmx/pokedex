import { useState } from "react";
import NavbarStyle from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';
import { usePokemonStates } from "../../Context/Context";

const Navbar = () => {

  const {pokeId} = usePokemonStates();

  const navigate =useNavigate()
  const [id, setId] = useState('');

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
      setIsOpen(!isOpen);
  };

  const handleChangeSeach = (e)=>{
    setId(e.target.value.toLowerCase());

  }



  const handleSubmit = (e) =>{
    e.preventDefault();
    navigate(`/pokedex/${id}`);
    setId('')
  }

  return (
    <>
      <form className={NavbarStyle.container} onSubmit={handleSubmit}>
        <div className={NavbarStyle.logo}>
          <i className="fa-solid fa-bars" onClick={toggleMenu}></i>
          <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" />PokeReact</Link></div>
        <ul className={NavbarStyle.list}>  
          
          <li><Link to="/">Home</Link></li>
          <li><Link to="/generations">Generations</Link></li>
          <li><Link to="/types">Types</Link></li>
          <li><Link to={`/pokedex/${pokeId}`}>Pokedex</Link></li>
        </ul>
        <div>
            <input type="text" placeholder="name or number" role="textbox" onChange={handleChangeSeach} value={id} required/>
            <button type="submit">Search</button>
          </div>
      </form>
      <ul className={`${NavbarStyle.listMobile} ${isOpen ? NavbarStyle.open : ''}`}>  
          <li><Link to="/">Home</Link></li>
          <li><Link to="/generations">Generations</Link></li>
          <li><Link to="/types">Types</Link></li>
          <li><Link to={`/pokedex/${pokeId}`}>Pokedex</Link></li>
        </ul>
    </>
  )
}

export default Navbar;