import React, { useEffect, useState } from 'react'
import{Form, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from'axios'



function Update() {
    const header = {'Access-Control-Allow-Origin' : "*"};
    const history = useNavigate();
    const Update = (e)=>{
        e.preventDefault();
        axios.put(
            `https://6493fee20da866a95366f920.mockapi.io/crud/${id}`,
            {name:name , email:email,
            header 
            }
            
    ).then(()=>{
         history('/Read');
    })
    };
    const[id , setId] = useState('0');
    const[name , setname] = useState('');
    const[email , setemail] = useState('');
    useEffect(()=>{
    setId(localStorage.getItem('id'));
        setname(localStorage.getItem('name'));
        setemail(localStorage.getItem('email'));
    },[])
    

  return (
   
       <div style={{margin:100}}>
      <h1>Update data</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="" placeholder="enter your name" value={name} onChange={(e)=>{setname(e.target.value) }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>{setemail(e.target.value) }}/>
      </Form.Group>
      <Button variant="primary"  on onClick={Update}>Update</Button>

      </Form>

    </div>
  


  )
}

export default Update
