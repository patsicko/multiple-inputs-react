import React,{useState} from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"
import styles from "./form.module.css"



const Form3 = () => {

    const[address,setAddress]=useState({
   fullName:'',
   email:'',
   password:'',
   repeat:''

    })

    const handleAddress=(e)=>{
        setAddress({...address,[e.target.name]:e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(address)
    }


  return (<>

<div className={styles.form3}>
      <span className={styles.up}>Sign Up</span>
   <Form onSubmit={handleSubmit}>
    <label htmlFor="">userName</label><Form.Control type="text" name="fullName"  onChange={(e)=>handleAddress(e)}  id="" />
    <label htmlFor="">email</label><Form.Control type="text" name="email"  onChange={(e)=>handleAddress(e)} id="" />
    <label htmlFor="">password</label><Form.Control type="text" name="password" onChange={(e)=>handleAddress(e)} id="" />
    <label htmlFor="">repeat password</label><Form.Control type="text" name="repeat" onChange={(e)=>handleAddress(e)} id="" />
  <br />
    <Button type="submit"> Sign Up</Button>
   </Form>

</div>
    </>
   
  )
}

export default Form3