
import './App.css';
import React,{lazy,Suspense} from 'react';
import Form2 from "./components/form";
// import SignUp from './components/signUp';
import Form3 from './components/form3';
const SignUp=React.lazy(()=>import("./components/signUp"))


function App() {
  return (
    <>

  

    <Form2/>

    <Suspense fallback={<div>
      loading.....
    </div>}>
    <SignUp/> 
    </Suspense>
    
    <Form3/>
    </>
  );
}

export default App;
