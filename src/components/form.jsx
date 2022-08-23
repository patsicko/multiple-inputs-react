
import Form from "react-bootstrap";
import Button from "react-bootstrap";
import React,{useState} from 'react';


const Form = () => {

const[input,setInput]=useState([{

  label:'',
  name:'',
  type:'',
  value:''
}]);


const handleInput=(event,index)=>{
  const data=[...input];
  data[index].value=event.target.value;
  setInput(data);
}





  return (
    <>
    <Form>
      {input.map((item,index)=>{


        <div key={index}>

        <form-group><label htmlFor="">{item.label} </label><input type={item.type}   onChange={(event)=>handleInput(event,index)} name={item.name} value={item.value} /></form-group>
        </div>


      })}
    

      
    </Form>
    
    </>
  )
}

export default Form