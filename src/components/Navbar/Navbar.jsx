import NavbarStyle from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
      <div className={NavbarStyle.container}>
        <ul className={NavbarStyle.list}>
          <li className={NavbarStyle.logo}><a href=""><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png" alt="" />Pokedex</a></li>
          <li><a href="">Home</a></li>
          <li><a href="">Generations</a></li>
          <li><a href="">About</a></li>
          <li><input type="text" placeholder="name or number"/><button>Seach</button></li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;