import React, { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import KYCForm from "../KYCForm/KYCForm";

export default function Home(props){

    useEffect(()=>{
        console.log(localStorage.getItem('userData'));
    })

    return(
        <div style={{height:'100%',display:'flex',justifyContent:'center'}}>
            <KYCForm/>
        </div>
    );
}