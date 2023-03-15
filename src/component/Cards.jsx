import React from "react";
import './Cards.css'
import { useState } from "react";
import { loremIpsum } from "react-lorem-ipsum";

function Cards(){
 
    // let practice = [
    //    { subject : 1  , content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint.'   },
    //    { subject : 2  , content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint.'   },
    //    { subject : 3  , content : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sint.'   }
    // ]

    const data = [
      {title : 'Title1' , content : 'fjsdof fjsdofdjsof jsofjsdo sdjofdj'} ,
      {title : 'Title2' , content : 'fjsdof fjsdofdjsof jsofjsdo sdjofdj'} ,
      {title : 'Title3' , content : 'djofj fsjofjsof sjfsdo fjfjsd ffdjsiofjfiso '} ,

    ]



  
    return(
      <section className="post-box">
        {/* {
          practice.map(function( a, i){
            return(
              <div className="post-card" key={i}>
              <h2>{practice[i].subject}</h2>
              <p className="post-card-txt">
               {practice[i].content}
              </p>
            </div>
            )

           
          })

        

         
        } */}

         {
          data.map((item , i)=>{
            return(
              <Card title={item.title} content={item.content} key={i}></Card>
            )
          })
         }




      </section>
    )
}

function Card(props){
  return (
    <div className="post-card">
    <h2>{props.title}</h2>
    <p className="post-card-txt">
      {props.content}
    </p>
  </div>

  )
}

export default Cards