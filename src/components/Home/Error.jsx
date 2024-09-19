import styles from './error.module.css/'

const Error = () => {
  return (
    <div className={styles.errorContainer}>
        <h2>Error 404: No encontrado</h2>
        <img src="https://www.pokemonunited.nl/img/dex/home/psyduck.png" alt="" />

    </div>
  )
}

export default Error