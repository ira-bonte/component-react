import React, { useRef } from "react";
import {useRef} from "react";
import {FaTimes , FaBars} from "react-icons/fa";
import "../src/style/main.css";

function Nav(){
    const navRef =useRef();
    const showNav =() => {
        navRef.current.classlist.toggle ("responsive_nav");
    }
    return(
        <header>
            <h3>Logo</h3>
        <nav ref={navRef}>
        <a href="#" id="brand">React</a>
        <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact Us</a></li>
        <button class="nav-btn-close-btn" onclick={showNav}>
            <FaTimes/>
        </button>
    </ul>
    </nav>
    </header>
    )
}
export default Nav
