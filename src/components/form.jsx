
// import {Form} from "react-bootstrap";
// import {Button} from "react-bootstrap";
// import React,{useState} from 'react';
// import InputData from "./inputData";
// import styles from "./form.module.css";


// const Form2 = () => {

// const[input,setInput]=useState([]);
// const[showForm,setShowForm]=useState(false);


// const handleInput=(event,index)=>{
//   const data=[...input];
//   data[index].value=event.target.value;
//   setInput(data);
// }


// const addNew=(label,name,type)=>{

// const newField={

//   label:label,
//   name:name,
//   type:type,
//   value:'',
//   placeholder:''

// }



// setInput(input.concat(newField));
// setShowForm(false);

// }


//   return (
//     <>
//     <div className={styles.fields}>
//     <Form className={styles.form}>

//       {input.map((item,index)=>(


//        <div key={index}>

//         <form-group><label htmlFor=""> {item.label} </label><input className="form-control" type={item.type}   onChange={(event)=>handleInput(event,index)} name={item.name} value={item.value} /></form-group>

//         </div>


//       ))}
           
//     </Form>

//     { showForm && <InputData  handleAdd={addNew}/>} <br />

//     { !showForm  &&   < Button onClick={()=>setShowForm(true)} > show Form</Button>}
//     </div>
    
//     </>
//   )
// }

// export default Form2







// import {Form} from "react-bootstrap";
// import {Button} from "react-bootstrap";
// import React,{useState} from 'react';
// import InputValues from "./inputData";
// import styles from "./form.module.css";

// const Form2=()=>{
// const[input,setInput]=useState([]);



//   const handleData=(e,index)=>{
//     const data=[...input];
//     data[index]["value"]=e.target.value
    
//     setInput(data);
//   }

//   const addForm=(label,type,name)=>{

//     const newForm={
//       label:label,
//       type:type,
//       name:name
//     }
//     console.log(newForm)
//    setInput(input.concat(newForm))

//   }


//   return(
//     <>
//     <div className={styles.form}>

//     <Form>
//     <h2>Login</h2>
//        {input.map((item,index)=>(

        
//               <React.Fragment>
                
//                 <form-group>  <label htmlFor="">{item.label}</label><Form.Control
//                 type={item.type} value={item.value} name={item.name} onChange={(e)=>{handleData(e,index)}} id="" /></form-group> <br /> <br />
                
//                 <br /><br />
               
//               </React.Fragment>
              
//        ))

//        }
//         <Button>submit</Button>
//        {<InputValues  handleValues={addForm} />}

//     </Form>
    
//     </div>
   
//     </>
//   )
// }

// export default Form2



import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import React,{useState} from 'react';
import InputValues from "./inputData";
import styles from "./form.module.css";

const Form2=()=>{

  const[input,setInput]=useState([]);
  const[showForm,setShowForm]=useState(false)

const handleInput=(e,index)=>{

const data=[...input];
data[index]["value"]=e.target.value;
setInput(data);



}

const addInput=(label,type,name)=>{
 
const newInput={
  label:label,
  type:type,
  name:name
}
console.log(newInput)
setInput(input.concat(newInput));
setShowForm(false)
}

const form=()=>{
  setShowForm(true)
}
return(<>

<div className={styles.form}>
<h1>Login</h1>
<Form>
    {input.map((item,index)=>(
      <div key={item.name} className={styles.input}>
      <form-group><label htmlFor="">{item.label}</label><Form.Control value={item.value} onChange={(e)=>{handleInput(e,index)}} type={item.type} name={item.name} id=""></Form.Control></form-group>
      </div>
    ))} <br />
  <Button>Submit</Button>

  

</Form>
<br />

{showForm  &&  <InputValues addData={addInput}/>}
<br />
<Button onClick={()=>form()}>show form</Button>
</div>

</>)
}


export default Form2