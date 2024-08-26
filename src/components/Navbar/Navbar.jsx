import NavbarStyle from "./Navbar.module.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate =useNavigate()

  return (
    <>
      <div className={NavbarStyle.container}>
        <ul className={NavbarStyle.list}>
          <li className={NavbarStyle.logo}><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" />Pokedex</a></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="generations">Generations</Link></li>
          <li><Link to="pokedex">Pokedex</Link></li>
          <li><input type="text" placeholder="name or number"/><button onClick={()=>navigate("/pokedex")}>Seach</button></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;