import pokedex from '../../assets/pokedex.png';
import homeStyle from './home.module.css';

const Home = () => {
  return (
    <div>
      <div className={homeStyle.panel1}>
        <img src={pokedex} alt="Pokedex" />
        <div className={homeStyle.panelCard}>
          <h2>Bienvenido</h2>
          <p>Esta web fue desarrollada con react </p>
        </div>
      </div>
    </div>
  )
}

export default Home
