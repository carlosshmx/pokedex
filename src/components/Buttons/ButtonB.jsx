import { useNavigate } from 'react-router-dom'
import styles from './button.module.css'

const ButtonB = ({children, target}) => {
    const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(target)} className={styles.buttonB}>
        {children}
    </button>
  )
}

export default ButtonB