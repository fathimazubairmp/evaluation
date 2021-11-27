import './App.css';

import { useState } from "react";

import axios from 'axios'

function Form() {
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
    function handleSubmit(event){
        event.preventDefault();

        console.log(inputs);

        axios
        .post('http://localhost:3500/Register',inputs) //post inbuild
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)   //input take 
            window.location='/Login';   //redirect
        })
    }
    return (<div>
        <form onSubmit={handleSubmit} className="signup" autoComplete='off'>
        <h2 >User Registration</h2>
            <div>
                <label >First name:</label>
                <input  type="text" name="first_name" value={inputs.first_name || ""} onChange={handleChange} required />
            </div>
            <div>
                <label >Last name:</label>
                <input type="text" name="last_name" value={inputs.last_name || ""} onChange={handleChange} required />
            </div>
            <div>
                    <label >User Type:</label>
                    <input  type="text" name="usertype"  value={inputs.usertype || ""} onChange={handleChange} required/>
            </div>
            <div>
                <label >Age:</label>
                <input type="text" name="age" value={inputs.age || ""} onChange={handleChange} required />
            </div>
            <div>
                <label >Mobile No:</label>
                <input  type="tel" name="mobile_no"  value={inputs.mobile_no || ""} onChange={handleChange} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
            </div>
            <div>
                <label >Email:</label>
                <input  type="text" name="email"  value={inputs.email || ""} onChange={handleChange} required />
            </div>
            <div>
                <label>Address :</label>
                <textarea  name="address"  value={inputs.address  || ""} onChange={handleChange}  required />
            </div>
            <div>
                <label >Password:</label>
                <input  type="password" name="password"  value={inputs.password || ""} onChange={handleChange} required />
            </div>
            <button className="button">Submit</button>
            <button className="button" >Reset</button>
        </form>
    </div>)
}

export default Form;


