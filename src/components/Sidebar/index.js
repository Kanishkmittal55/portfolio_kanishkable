import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import {faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub , faYoutube   } from '@fortawesome/free-brands-svg-icons'

const Sidebar = ()  => (
    <div className= 'nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo"  src={LogoSubtitle} alt="slobodan" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/" >
                <FontAwesomeIcon icon={faHome} colors="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about" >
                <FontAwesomeIcon icon={faUser} colors="#4d4d4e" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link"to="/contact" >
                <FontAwesomeIcon icon={faEnvelope} colors="#4d4d4e" />
            </NavLink>
        </nav>
        
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/kanishk-mittal-1a6ab6b9/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
        
        
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/kai7565105'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
        
        
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.youtube.com/channel/UChrBn1BJ3F5GWd3vZTfkKtA'>
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li>
        </ul>


    </div>)    

export default Sidebar