// import React,{useState} from 'react';
// import {Form} from 'react-bootstrap';
// import { Button } from 'react-bootstrap';
// import * as yup from "yup";





// const InputData = (props) => {

// const[label,setLabel]=useState('');
// const[name,setName]=useState('');
// const[type,setType]=useState('');
// const[error,setError]=useState('');

// const schema=yup.object().shape({
// label:yup.string().required().label("label"),
// name:yup.string().required().label("name"),
// type:yup.string().required().label("type")

// })

// const valid=()=>{

// schema.validate({
//   label:label,
//   name:name,
//   type:type
// },{
// abortEarly:false

// }).then((valid)=>{props.handleAdd(label,name,type)}).catch((err)=>{
//   err.inner.map(item=>{
     

    
//     setError(error.concat({
//       [item.path]:item.message

//     }));
//   })
  

//   console.log(err.inner[0].path);
//   console.log(Object.keys(err))

// });

// }

//   return (

//     <>
//     <Form >
//         <form-group> <label>Label</label><Form.Control className="form-control"  onChange={(e)=>setLabel(e.target.value)} type="text" name="label" id="" />{error}</form-group> <br /><br />
//         <form-group><label>Name</label><Form.Control className="form-control" onChange={(e)=>setName(e.target.value)} type="text" name="name" id="" />{error}</form-group><br /><br />
//         <form-group><label>Type</label><Form.Control className="form-control" onChange={(e)=>setType(e.target.value)} type="text" name="type" id="" />{error}</form-group><br /><br />

//         < Button type="button" onClick={()=>valid()}>Add Form.Control</ Button>
      
//     </Form>

//     </>
//   )
// }

// export default InputData


/*

import React,{useState} from 'react';
import {Form} from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import * as yup from "yup";

const InputValues=(props)=>{
 const[value,setValue]=useState({
  label:"",
  type:'',
  name:"",
 

 });

 const handleValue=(e)=>{

  setValue({...value,[e.target.name]:e.target.value})

 }


 return(<>

 <Form>
 
  <form-group><label htmlFor="">label</label><Form.Control value={value.label} onChange={handleValue} type="text" name="label" id="" /></form-group>
  <form-group><label htmlFor="">type</label><Form.Control value={value.type} onChange={handleValue} type="text" name="type" id="" /></form-group> 
  <form-group><label htmlFor="">name</label><Form.Control value={value.names} onChange={handleValue} type="text" name="name" id="" /></form-group> 
 <br />
  <Button onClick={(e)=>{props.handleValues(value.label,value.type,value.name)}}>add Form.Control</Button>
 </Form>

 </>)
}

export default InputValues */



import React from "react";
import react,{useState} from "react";
import { Button, NavItem } from "react-bootstrap";
import { Form } from "react-bootstrap";
import * as yup from "yup";






const InputValues=(props)=>{

const[data,setData]=useState({
    label:'',
    type:'',
    name:''
})

const[error,setError]=useState({
    label:'',
    type:'',
    name:""
});

const validateSChema=yup.object().shape({
    label:yup.string().required(),
    type:yup.string().required(),
    name:yup.string().required()

})



const validateForm=()=>{


    validateSChema.validate(data,{abortEarly:false}).then((valid)=>{
         console.log(valid);
         {props.addData(data.label,data.type,data.name)}
    }).catch(error=>{
        console.log(
            Object.keys(error)

        )
     
      const dataError={}
        error.inner.map(item=>{
            console.log(item.message)
            
            dataError[item.path]=item.message;

            setError(dataError);
            
        })
    })


}




const handleData=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}
 
return(<React.Fragment>

<Form>
   
    <Form.Group><label htmlFor="">label</label><Form.Control value={data.label} onChange={(e)=>handleData(e)} type="text" name="label" id="" />{error.label}</Form.Group>
    <Form.Group><label htmlFor="">type</label><Form.Control value={data.type} onChange={(e)=>handleData(e)}type="text" name="type" id="" />{error.type}</Form.Group>
    <Form.Group><label htmlFor="">name</label><Form.Control value={data.name} onChange={(e)=>handleData(e)}type="text" name="name" id="" />{error.name}</Form.Group>
 <br />
<Button onClick={()=>{validateForm()}}>add input</Button>

</Form>

</React.Fragment>)
}

export default InputValues;