import styles from "./footer.module.css"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>
            <h4>Developed by Carlos Colmenares</h4>
            <p>Using React.js</p>
        </div>
        <ul>
            <li><Link to={"https://github.com/carlosshmx"} target="blank"><i class="fa-solid fa-briefcase"></i> Portfolio</Link></li>
            <li><Link to={"https://github.com/carlosshmx"} target="blank"><i class="fa-brands fa-github"></i> Github</Link></li>
            <li><Link to={"https://linkedin.com/in/carlosshmx"} target="blank"><i class="fa-brands fa-linkedin"></i> Linkedin</Link></li>
        </ul>
    </div>
  )
}

export default Footer
