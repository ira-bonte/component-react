import {useRef} from "react";
import {FaTimes , FaBars} from "react-icons/fa";

function Nav(){
    const navRef =useRef();

    const showNav =() => {
        navRef.current.classlist.toggle ("responsive_nav");
    }
    return <header>
                <h3>Logo</h3>
                <nav ref={navRef}>
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">About Us</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">Contact Us</a></li>
                    </ul>
                </nav>
                <div className="buttons">
                    <button className="nav-btn-close-btn" onClick={showNav}>
                        <FaTimes />
                    </button>
                    <button className="nav-btn-close-btn" onClick={showNav}>
                        <FaBars />
                    </button>
                </div>
            </header>
}
export default Nav
