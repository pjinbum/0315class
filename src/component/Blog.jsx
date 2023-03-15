import React from "react";
import './Blog.css'
import { useState } from "react";

function Blog(){
  
     const [title , setTitle] = useState([
        'Title1' ,
        'Title2' ,
        'Title3' ,
     ])

     let name = [
        '이름1' ,
        '이름2' ,
        '이름3'
     ]


    return(
     <div>
        <div className="nav">
           <h1>Blog</h1>
        </div>

        {
            title.map((item , i)=>{
                return(
                    <div key={i} className="list" onClick={()=>{                        
                        <Modal title={item} content={name}></Modal>
                    }}>
                        <h4>{item}</h4>
                        <p>안녕하세요 저는 {name[i]}입니다.</p>
                        <button onClick={(index)=>{
                             const copyTitle = [...title];
                             copyTitle.push(`Title ${(Math.random())}`)
                             setTitle(copyTitle)
                        }}>글 추가</button>
                        <button onClick={function(index){
                            const copyTitle = [...title];
                            copyTitle.splice(index , 1)
                            setTitle(copyTitle)
                        }}>글 삭제</button>
                       
                       


                      
                    </div>
                )
            })

            
            
        }
     </div>
    )
}


function Modal(props){
    return(
        <div className="modal">
          <h4>{props.title}</h4>
          <p>{props.name}</p>
          <button>닫기</button>
        </div>
    )
}




export default Blog ;