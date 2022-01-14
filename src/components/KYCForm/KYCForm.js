import { useState } from 'react';
import {FormLabel, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default function KYCForm(props){

    const [ aadharFile, setAadharFile ] = useState(null);
    const [ PANFile, setPANFile ] = useState(null);
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

    return(
        <div style={{width:'50%'}}>
            <Form onSubmit={e => submitHandler(e) }>
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