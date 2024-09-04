import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './button.module.css'

const ButtonA = ({children, target}) => {
    const navigate = useNavigate();
  return (
    <button onClick={()=>navigate(`/${target}`)} className={styles.buttonA}>
      {children}
    </button>
  )
}

export default ButtonA
