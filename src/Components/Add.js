import React, { useState } from 'react'
import{Form, Button} from 'react-bootstrap'
import axios from'axios'
import { useNavigate } from 'react-router-dom';
function Add() {
    const[name ,setname] = useState();
    const[email ,setemail] = useState();
    const header = {'Access-Control-Allow-Origin' : "*"};
    const history = useNavigate();
    const Adduser = (e)=>{
        e.preventDefault();
        axios.post(
            'https://6493fee20da866a95366f920.mockapi.io/crud',
            {name:name , email:email,
            header 
            }
            
    );history('/Read');
    };
  return (
    <div style={{margin:100}}>
      <h1>Enter data</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="" placeholder="enter your name" onChange={(e)=>{setname(e.target.value) }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" onChange={(e)=>{setemail(e.target.value) }} />
      </Form.Group>
      <Button variant="primary" onClick={Adduser }>Submit</Button>{' '}

      </Form>

    </div>
  )
}

export default Add
