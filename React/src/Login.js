
import './App.css';
import axios from 'axios';
import { useState } from "react";

function Login() {
    return (<div>

        <MyForm />

    </div>);
}
function MyForm() {
    const[inputs,setInputs] = useState({})


    function handleChange(event){
        const name = event.target.name ;
        const value = event.target.value;

        setInputs(values =>({...values, [name]:value}))

    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
       
        axios
       .post('http://localhost:3007/asset', inputs)
       .then(response => {
            //alert(response.data.user.id)
            //alert(response.data.accessToken)
            localStorage.setItem('mytoken', response.data.accessToken)
            //navigate('/stafflist')
           
       })
       .catch(error => {
            localStorage.clear();
            //alert("got error with no data")
            if (error.response) {
                alert(error.response.data); // => the response payload
               
           }
           
       })
       
   }
    var login={

            background:'rgba(44, 62, 80, 0.7)',
            padding:'40px',
            width:'250px',
            margin:'auto',
            height:'255px',
            marginTop:'40px'
    }
    return (<div>
        <form onSubmit={handleSubmit} className="signup" autoComplete='off' style={login}>
        <h2 >Login Form</h2>
                <div>
                    <label >first name:</label>
                    <input  type="text" name="first_name"  value={inputs.first_name || ""} onChange={handleChange} required/>
                </div>
                <div>
                    <label >Password:</label>
                    <input  type="password" name="password"  value={inputs.password || ""} onChange={handleChange} required/>
                </div>
                <div>
                    <label >User Type:</label>
                    <input  type="text" name="usertype"  value={inputs.usertype || ""} onChange={handleChange} required/>
                </div>
                      <button className="button" >Login</button>
                      <button className="button" >Register</button>
          
        </form>
    </div>)
}

export default Login;
