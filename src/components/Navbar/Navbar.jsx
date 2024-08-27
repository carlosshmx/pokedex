import { useState } from "react";
import NavbarStyle from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate =useNavigate()
  const [id, setId] = useState(1);

  const handleChangeSeach = (e)=>{
    setId(e.target.value);

  }

  const handleOnClick = ()=>{
    navigate(`/pokedex/${id}`);
    
  }

  return (
    <>
      <div className={NavbarStyle.container}>
        <ul className={NavbarStyle.list}>
          <li className={NavbarStyle.logo}><Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" />Pokedex</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="generations">Generations</Link></li>
          <li><Link to={`/pokedex/${id}`}>Pokedex</Link></li>
          <li><input type="text" placeholder="name or number" onChange={handleChangeSeach}/><button onClick={handleOnClick}>Seach</button></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;