import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';





const InputData = (props) => {
const[label,setLabel]=useState('');
const[name,setName]=useState('');
const[type,setType]=useState('');


  return (

    <>
    <Form >
        <form-group> <label>Label</label><input className="form-control"  onChange={(e)=>setLabel(e.target.value)} type="text" name="" id="" /></form-group> <br /><br />
        <form-group><label>Name</label><input className="form-control" onChange={(e)=>setName(e.target.value)} type="text" name="" id="" /></form-group><br /><br />
        <form-group><label>Type</label><input className="form-control" onChange={(e)=>setType(e.target.value)} type="text" name="" id="" /></form-group><br /><br />

        < Button type="button" onClick={()=>props.handleAdd(label,name,type)}>Add input</ Button>
    </Form>

    </>
  )
}

export default InputData