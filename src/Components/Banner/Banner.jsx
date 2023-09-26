/* eslint-disable react/prop-types */
import {  useState } from "react";
import Match from "../Donations/Match";
import { Link } from "react-router-dom";





const Banner = ({donations}) => {
    
    
    const[input,setInput]=useState('')
    const [donationss,setdonation] =useState([])
    
   
    const handleSubmit =e=>{
        e.preventDefault();
        if(input){
         const Scarch = donations.filter( donation => donation.category == input )
         
            
         if(Scarch){

            setdonation(Scarch)

            }
            
            
         }
            
             setInput('')
          
            
        }
 
      
    const handleInput =e=>{
       
        setInput(e.target.value)
        
    }
    
    return (

        <div className="mb-10">
           <div className="hero max-h-screen lg:min-h-[80vh]" style={{backgroundImage: 'url(https://i.ibb.co/2F0w3M5/Pasted-Graphic.png'}}>
    <div className="hero-overlay bg-white bg-opacity-90"></div>
        <div className="hero-content text-center text-neutral-content">
     <div className="lg:max-w-full max-w-sm">
     <div className="mt-32">
           <h1 className=" text-2xl lg:text-5xl font-bold  flex items-center text-black justify-center">I Grow By Helping People In Need</h1>
           <div className="mt-10 mb-10 flex justify-center items-center">
            <input value={input} onChange={handleInput} className="shadow text-black w-96 h-11 bg-slate-100" placeholder="Search Here" type="text" />
             <button onClick={handleSubmit} className=" btn  bg-red-500">Search</button> </div>
           </div>
        </div>
        </div>
     </div>
            <Match donationss={donationss}></Match>
     
        </div>
    );
};

export default Banner;