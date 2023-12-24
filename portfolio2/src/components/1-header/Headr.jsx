import React, { useEffect, useState } from "react";
import "./header.css";


 function Header(){
    const [showModal , setshowModel] = useState(false);


    const [them, setThem] = useState(localStorage.getItem("them") ?? "light");
    useEffect(() => {
        if(them == "dark"){
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }else{
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [them])
    
    return (
     <header className="flex">
        <button className="menu icon-menu" onClick={()=>{
            setshowModel(true)
        }}></button>
        <div />
        
        <nav>
        <ul className="flex">
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Articles</a></li>
            <li><a href="">CV</a></li>
            <li><a href="">Contact</a></li>
        </ul>
        </nav>

        { them === "dark" ? (
            <button  className="icon-moon-o" id='them' onClick={() => { 
                // set value in localstorge 
                localStorage.setItem("them",them ==="dark" ? "light":"dark" );
                setThem(localStorage.getItem("them"));  
    
             }} >
                   
             </button>
        ) : (
            <button  className="icon-wb_sunny" id='them' onClick={() => { 
                // set value in localstorge 
                localStorage.setItem("them",them ==="dark" ? "light":"dark" );
                setThem(localStorage.getItem("them"));  
    
             }} >
                   
             </button>
        )}

{showModal && (
                <div className="fixed">
                    <ul className="modal">
                    <li>
                        <button className="icon-close" onClick={()=>setshowModel(false)}>
                      
                        </button>
                        </li>
                        <li><a href="">About</a></li>
                        <li><a href="">Projects</a></li>
                        <li><a href="">Articles</a></li>
                        <li><a href="">CV</a></li>
                        <li><a href="">Contact</a></li>
                    </ul>
                </div>
)}
        
     </header>
    );
}
export default Header;