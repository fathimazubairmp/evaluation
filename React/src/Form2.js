
import axios from 'axios';
import { useState } from "react";

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
        .post('http://localhost:3007/asset',inputs) //post inbuild
        .then(response =>{
            console.log('promise fulfilled')
            console.log(response)   //input take 
             //redirect
        })
    }
    var Form2={
        background: 'indianred',
        width:'400px',
        height:'400px',
        marginLeft:'35%',
        textAlign:'center'
    }
    
    var h2={
        textAlign:'center',
        color:'white',
        padding:'5px 40px 15px 40px'
    }
    var label ={
        fontFamily:'Georgia',
        fontSize:'15px'
    }
    var input={
        outline:'none',
        border:'none',
        background: 'indianred',
        borderBottom: 'solid 1px black'
    }
    var div={
        textAlign:'center',
        padding:'4px 4px'
    }
    var button={
        background:'rgb(124, 199, 50)',
        width:'150px',
        height:'25px',
        borderRadius:'20px',
        marginTop:'20px',
        marginLeft:'20px',
    }
    
    var cancel={
        background: 'red',
        width:'150px',
        height:'25px',
        borderRadius:'20px',
        marginTop:'20px',
        marginLeft:'20px',
    }
    return (<div style={div}>
        <form onSubmit={handleSubmit}  style={Form2}  autoComplete='off'>
            <h2 style={h2}>Customer Details Entry Form</h2>
            <div style={div}>
                <label style={label} >am Model:</label>
                <input style={input}  type="text" name="am_model"  value={inputs.am_model || ""} onChange={handleChange} />
            </div>
            <div style={div}>
                <label style={label} >am snumber:</label>
                <input style={input}  type="text" name="am_snumber" value={inputs.am_snumber || ""} onChange={handleChange}/>
            </div>
            <div style={div}>
                <label style={label} >am myyear:</label>
                <input style={input} type="date" name="am_myyear" value={inputs.am_myyear || ""} onChange={handleChange}/>
            </div>
            <div style={div}>
                <label style={label} >am pdate</label>
                <input style={input}  type="date" name="am_pdate"  value={inputs.am_pdate || ""} onChange={handleChange} />
            </div>
            <div style={div}>
                <label style={label} >am warranty:</label>
                <input style={input}  type="text" name="am_warranty"  value={inputs.am_warranty || ""} onChange={handleChange} />
            </div>
            <div style={div}>
                <label style={label} >am from:</label>
                <input style={input}  type="date" name="am_from"  value={inputs.am_from || ""} onChange={handleChange}/>
            </div>
            <div style={div}>
                <label style={label} >am to:</label>
                <input style={input}  type="date" name="am_to"  value={inputs.am_to || ""} onChange={handleChange} />
            </div>
            <button style={button}>Save</button>
            <button  style={cancel}>Cancel</button>
        </form>
    </div>)
}

export default Form;