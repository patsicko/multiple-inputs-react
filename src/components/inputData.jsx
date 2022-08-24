import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as yup from "yup";





const InputData = (props) => {
const[label,setLabel]=useState('');
const[name,setName]=useState('');
const[type,setType]=useState('');
const[error,setError]=useState('');

const schema=yup.object().shape({
label:yup.string().required().label("label"),
name:yup.string().required().label("name"),
type:yup.string().required().label("type")

})

const valid=()=>{

schema.validate({
  label:label,
  name:name,
  type:type
},{
abortEarly:false

}).then((valid)=>{props.handleAdd(label,name,type)}).catch((err)=>{
  err.inner.map(item=>{
     

    
    setError(error.concat({
      [item.path]:item.message

    }));
  })
  

 
  console.log(err.inner[0].path);
  console.log(Object.keys(err))



});




}

  return (

    <>
    <Form >
        <form-group> <label>Label</label><input className="form-control"  onChange={(e)=>setLabel(e.target.value)} type="text" name="label" id="" />{error}</form-group> <br /><br />
        <form-group><label>Name</label><input className="form-control" onChange={(e)=>setName(e.target.value)} type="text" name="name" id="" />{error}</form-group><br /><br />
        <form-group><label>Type</label><input className="form-control" onChange={(e)=>setType(e.target.value)} type="text" name="type" id="" />{error}</form-group><br /><br />

        < Button type="button" onClick={()=>valid()}>Add input</ Button>
      
    </Form>

    </>
  )
}

export default InputData