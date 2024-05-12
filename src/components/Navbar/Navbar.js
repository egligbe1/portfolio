import {useState, React} from 'react';
import './navbar.css'
import logo from '../../assets/egligbe.png';
import {Link}  from "react-scroll";
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div>
        <nav className="navbar">
            <img src={logo} alt="logo" className='logo'/>
            <div className="desktopMenu">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={15} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>    
            </div>
            <button className="desktopContactBtn" 
              onClick={() => {
                document.getElementById('contactArea').scrollIntoView({behavior: 'smooth'});
              }}>
              <img src={contactImg} alt="contact me" className="desktopContactImg" />Contact Me</button>

            <img src={menu} alt="Menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={15} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                <Link activeClass='active' to='contactArea' spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>    
            </div>
        </nav>
    </div>
  )
}

export default Navbar