import React,{useState} from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import styles from "./form.module.css";
import * as yup from "yup";


const SignUp=()=>{

 const[address,setAddress]=useState({
    name:'',
    email:'',
    password:'',
    confirm:'',
 })

 const[error,setError]=useState({
    name:'',
    email:'',
    password:'',
    confirm:''
 });

 const validateSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().required(),
    password:yup.string().min(4).max(8).required(),
    confirm:yup.string().oneOf([yup.ref("password")])

 })

 const validateForm=()=>{
 validateSchema.validate(address,{abortEarly:false}).then((valid)=>{
    console.log(valid)
    
    submit();

 }).catch((err)=>{

    let dataError={}
    err.inner.map(item=>{
        
      dataError[item.path]=item.message

    })
    setError(dataError);
    console.log(dataError);
 })
 }
const submit=(e)=>{
    e.preventDefault();
    console.log(address)
}
 
 const handleAddress=(e)=>{
    setAddress({...address,[e.target.name]:e.target.value})
 }
    return(<>
    <div className={styles.sign}>
    <Form className={styles.SignUp}>
        {/* {JSON.stringify(error)} */}
        <p>Sign Up</p>
        <form-group><Form.Control type="text" value={address.name} onChange={(e)=>{handleAddress(e)}} placeholder="Full name" name="name" id="" /><span className={styles.error}>{error.name}</span></form-group> <br />
        <form-group><Form.Control type="text" value={address.email} onChange={(e)=>{handleAddress(e)}} placeholder="Email" name="email" id="" /><span className={styles.error}>{error.email}</span ></form-group><br />
        <form-group><Form.Control type="text" value={address.password} onChange={(e)=>{handleAddress(e)}} placeholder="Password" name="password" id="" /><span className={styles.error}>{error.password}</span></form-group><br />
        <form-group><Form.Control type="text" value={address.confirm} onChange={(e)=>{handleAddress(e)}} placeholder="Confirm password" name="confirm" id="" /><span className={styles.error}>{error.confirm}</span></form-group><br />

        <Button className={styles.button} onClick={(e)=>{validateForm()}}>Create Account</Button> <br /><br />

       <span > Already have account?</span>
    </Form>
    </div>
   

    </>)
}

export default SignUp