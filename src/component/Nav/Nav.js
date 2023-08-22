import React from "react";
import'./nav.css'

const Nav = () =>{
    return React.createElement('header', {id: 'header', className: 'header'},
    React.createElement('h1',null,"Irabo"),
    React.createElement('ul',{id: 'list', className: 'list'},
    React.createElement('li',null, "Home"),
    React.createElement('li',null, "About"),
    React.createElement('li',null, "Products"),
    React.createElement('li',null, "Contact")))
}
export default Nav;