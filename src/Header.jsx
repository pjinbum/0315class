import React from "react";
import apple from './image/applelogo.png'
import ListMenu from "./ListMenu";

const headerStyle={
    box : {
        width : '100vw' ,
        height :  '60px' ,
        backgroundColor : 'black' ,
        display : 'flex' ,
        justifyContent : 'spaceBetween'     

    } ,

    logo : {
        width : '40px' ,
        marginLeft :'20px'
    }
}



function Header(){
 return(
   <div style={headerStyle.box}>
     <div>
       <img src={apple} alt="logo" style={headerStyle.logo} /> 
     </div>
     <div>
       <ListMenu></ListMenu>
       <ListMenu></ListMenu>
       <ListMenu></ListMenu>
     </div>
   </div>
 )
}

export default Header


