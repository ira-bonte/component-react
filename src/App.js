import React from 'react';
// import Welcome from './component/Welcome';
// import Form from './component/Form/Form' ;
// import Table from './component/monday/Table';
// import Greet from './component/Greet';
// import Nav from './component/navbar/Navbar';
// import '../src/Style/Main.css';
// import { Component } from 'react';
import Nav from './component/Nav/Nav';

// class App extends Component{
//   render(){
//     return(
//      <div className='DivName'>
//       <Greet name="Bonte" HeroName="Strong Woman"/>
//       <Greet name="Esther" HeroName="Wonder Woman"/>
//       <Greet name="Kenia" HeroName="Specific Woman"/>
//       <Greet name="Cynthia" HeroName="Crazy Woman"/>
//       <p>This is the child props.</p>
//      </div>
//     );
//     }
// }
function App(){
  return (
    <React.Fragment>
        <Nav />
    </React.Fragment>
  )
}
export default App;