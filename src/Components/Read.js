import React, { useState, useEffect } from 'react';
import { Table, Button } from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get('https://6493fee20da866a95366f920.mockapi.io/crud').then((res) => {
      setData(res.data);
    });
  };
  const Delete =(id)=>{
    axios.delete(`https://6493fee20da866a95366f920.mockapi.io/crud/${id}`).then(()=>{
        getData();
    })
  }
  const saveLocal=(id,name,email)=>{
  localStorage.setItem('id' ,id);
    localStorage.setItem('name',name);
    localStorage.setItem('email',email);
  }

  return (
    <div style={{ margin: 100 }}>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><Link to={'/Update'}>
                <Button variant="warning" onClick={()=>{saveLocal(item.id,item.name,item.email)}}>Edit</Button> </Link>
                <Button variant="danger" onClick={()=> Delete(item.id)}> Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Link to={'/'}>

      <Button variant="primary" >Addmore</Button>{' '}
      </Link>

    </div>
  );
};

export default Read;
