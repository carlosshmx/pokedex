import styles from './loading.module.css'

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
        <h2>Cargando...</h2>
        <img className={styles.errorImg} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/512px-Pok%C3%A9_Ball_icon.svg.png?20161023215848" alt="" />
    </div>
  )
}

export default Loading