import React, { useState } from "react";
import {FormLabel, Button, Form } from 'react-bootstrap';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './../additionals/validator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import axios from "axios";
import { Link ,useNavigate } from "react-router-dom";
// import { Redirect } from "react-router"

export default function FormLogin(props) {

    const [ formData, setFormData ] = useState({ email: '', password: '' });
    const [ errors, setErrors ] = useState({});
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ loading, setLoading ] = useState(false);
    let navigate=useNavigate();

    let loginProceed = e => {
        e.preventDefault();
        console.log(formData)
        if(!isEmpty(formData.email) && !isEmpty(formData.password)){
            axios.post('http://127.0.0.1:8000/login/',formData).then(e => {
                console.log(e)
                console.log(e.status)
                if(e.status==200){
                    console.log('redi');
                    localStorage.setItem('userData',JSON.stringify(formData));
                    navigate('/home',{ replace:true })
                }
            })
        }else{
            return;
        }
    }

    let handleInputChange = e => {
        // console.log(e);
        let initialData={...formData};
        initialData[e.target.name]=e.target.value;
        setFormData({...initialData});
    };

    return(
        <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}>
            <div className="Login">
                <Form onSubmit={loginProceed}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control value={formData.email} name="email" type="email" placeholder="Email" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={formData.password} name="password" type="password" placeholder="Password" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <Link to='/register'>Register</Link>
            </div>
        </div>
    )
}