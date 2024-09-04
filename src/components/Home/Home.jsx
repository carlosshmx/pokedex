import pokedex from '../../assets/pokedex.png';
import homeStyle from './home.module.css';
import ButtonA from '../Buttons/ButtonA';

const Home = () => {
  return (
    <div>
      <div className={homeStyle.panel1}>
        <img src={pokedex} alt="Pokedex" />
        <div className={homeStyle.panelCard}>
          <h2>Welcome</h2>
          <p>This web app was developed using React as part of a personal project, here you can find several sections to seach and learn detailed information about your favorite Pokemon.</p>
          <p>Let´s go, touch an option</p>
          <div>
            <ButtonA target='generations'>Find by generation</ButtonA>
            <ButtonA>Find by type</ButtonA>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
