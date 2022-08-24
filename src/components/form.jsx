
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import React,{useState} from 'react';
import InputData from "./inputData";
import styles from "./form.module.css";


const Form2 = () => {

const[input,setInput]=useState([]);
const[showForm,setShowForm]=useState(false);


const handleInput=(event,index)=>{
  const data=[...input];
  data[index].value=event.target.value;
  setInput(data);
}


const addNew=(label,name,type)=>{

const newField={

  label:label,
  name:name,
  type:type,
  value:'',
  placeholder:''

}



setInput(input.concat(newField));
setShowForm(false);

}


  return (
    <>
    <div className={styles.fields}>
    <Form className={styles.form}>

      {input.map((item,index)=>(


       <div key={index}>

        <form-group><label htmlFor=""> {item.label} </label><input className="form-control" type={item.type}   onChange={(event)=>handleInput(event,index)} name={item.name} value={item.value} /></form-group>

        </div>


      ))}
           
    </Form>

    { showForm && <InputData  handleAdd={addNew}/>} <br />

    { !showForm  &&   < Button onClick={()=>setShowForm(true)} > show Form</Button>}
    </div>
    
    </>
  )
}

export default Form2