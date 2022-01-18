import { useState } from 'react';
import {FormLabel, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default function KYCForm(props){

    const [ aadharFile, setAadharFile ] = useState(null);
    const [ PANFile, setPANFile ] = useState(null);
    const [ name, setName ] = useState('');
    const [ fatherName, setFatherName ] = useState('');
    const [ motherName, setMotherName ] = useState('');
    const [ address, setAddress ] = useState('');
    const [ number, setNumber ] = useState('');
    const [ DOB, setDOB ] = useState('');
    let submitHandler=e => {
        e.preventDefault();
        if(aadharFile!==null && PANFile!==null){
            console.log(aadharFile.name, PANFile.name);
            const formData=new FormData();
            formData.append('aadhar', aadharFile, aadharFile.name);
            formData.append('pan', PANFile, PANFile.name);
            axios.post('http://localhost:8000/uploadDocs/',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            }).then(e => console.log(e))
        }
    }

    //name
    //father name
    //mother name
    // address
    // dob
    return(
        <div style={{width:'50%'}}>
            <Form onSubmit={e => submitHandler(e) }>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control value={name} type='text' onChange={e => {console.log(e.target.value);setName(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fathter Name</Form.Label>
                    <Form.Control value={fatherName} type='text' onChange={e => {console.log(e.target.value);setFatherName(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mother Name</Form.Label>
                    <Form.Control value={motherName} type='text' onChange={e => {console.log(e.target.value);setMotherName(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control value={address} type='text' onChange={e => {console.log(e.target.value);setAddress(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control value={number} type='text' onChange={e => {console.log(e.target.value);setNumber(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type='date' value={DOB} onChange={e => {console.log(e.target.value);setDOB(e.target.value); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Aadhar Card</Form.Label>
                    <Form.Control type='file' accept='.pdf' onChange={e => {console.log(e.target.files[0]);setAadharFile(e.target.files[0]); }}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>PAN</Form.Label>
                    <Form.Control type='file' accept='.pdf' onChange={e => {console.log(e.target.files[0]);setPANFile(e.target.files[0]); }}/>
                </Form.Group>
                <Form.Group className="text-center">
                    <Button variant="primary" type="submit">Submit</Button>
                </Form.Group>
            </Form>
        </div>
    )
}