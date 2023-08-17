import logo from './logo.svg';
import './App.css';
// import Welcome from './component/Welcome';
// import Form from './component/Form/Form' ;
// import Table from './component/monday/Table';
// import Hello from './component/hello';
import Nav from './component/navbar/Navbar';
import '../src/Style/Main.css';
import { Component } from 'react';

class App extends Component{
  render(){
    return(
      
         <Nav/>
      
      
    );
    }
}

export default App;