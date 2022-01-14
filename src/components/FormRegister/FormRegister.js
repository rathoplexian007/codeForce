import React, { useState } from "react";
import {FormLabel, Button, Form } from 'react-bootstrap';
import { isEmail, isEmpty, isLength, isContainWhiteSpace } from './../additionals/validator';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../FormLogin/Login.css';
import axios from "axios";
import { Link } from "react-router-dom";

export default function FormRegister(props) {

    const [ formData, setFormData ] = useState({ email: '', password: '', confirmPassword: '' });
    const [ errors, setErrors ] = useState({});
    const [ formSubmitted, setFormSubmitted ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    let loginProceed = e => {
        e.preventDefault();
        // console.log(!isEmpty(formData.email),!isEmpty(formData.password))
        if(!isEmpty(formData.email) && !isEmpty(formData.password)){
            console.log(JSON.stringify(formData))
            axios.post('http://127.0.0.1:8000/register/',formData).then(e=>console.log(e));
        }else{
            console.log(e);
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
                    <Form.Group className="mb-3">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control value={formData.confirmPassword} name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleInputChange}/>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="primary" type="submit">Submit</Button>
                    </Form.Group>
                </Form>
                <Link to='/login'>Login</Link>
            </div>
        </div>
    )
}