import React from "react";


//  const Greet=(props)=>{
//   console.log(props)
//   return 
//   <
//  }
// without jsx
   const Greet= () =>{
    return React.createElement( 'div',null,{id:'hello', className:'DivName'},
  React.createElement('h1' ,null,"Hello Devs")
   )
   }
  export default Greet;