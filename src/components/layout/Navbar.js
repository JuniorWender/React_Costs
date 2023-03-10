import { Link } from 'react-router-dom'

import Container from './Container'
import logo from '../../img/costs_logo.png'

import styles from './Navbar.module.css'

function Navbar(props){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="costs"/></Link>
                <ul className={styles.navbar}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Projects">Projects</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/OtherProjects">Other Projects</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}

export default Navbar
