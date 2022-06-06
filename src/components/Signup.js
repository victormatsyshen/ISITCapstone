import { useState } from "react";
import {variables} from '../Variables';
import App from '../App';
import styles from "../styles/Signup.css";

export default function Signup() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if(inputs.Password === inputs.RePassword){
        createCustomer(inputs.First_name, inputs.Last_name, inputs.Email, inputs.Password)
        App.setLogin(true);
        alert("thank you for joining the Croc family!");
    }
    else{
        alert("Please make sure your passwords match.")
    }
  }

  return (
    <div className="Modal">
    <form className='forms' onSubmit={handleSubmit}>
    <img className='logo' src='/static/media/crocLogo.6c89337032a4540d62e5.png' alt='Crocodile Logo'/>
      <hr/>
      <br/>
      <div className="Input">
      <input 
        type="text" 
        name="First_name" 
        placeholder="First name"
        onChange={handleChange}
      />
      <br/>
        <input 
          type="text" 
          name="Last_name"
          placeholder="Last name" 
          onChange={handleChange}
        />
        <br/>
        <input 
          type="email"
          name="Email"
          placeholder="example@gmail.com" 
          onChange={handleChange}
        />
        <br/>
        <input 
          type="password" 
          name="Password"
          placeholder="Password"  
          onChange={handleChange}
        />
        <br/>
        <input 
          type="password" 
          name="RePassword"
          placeholder="ReEnter Password"  
          onChange={handleChange}
        />
        <br/>
        <button type="submit">Register</button>
        <br/>
        <b className="foot">Already registered: <a href="/login">sign in?</a>
        </b>
        </div>
    </form>
    </div>
  )
}
function createCustomer(First_name, Last_name, Email, Password){
    alert(Email);
    fetch(variables.API_URL+'Customer',{
        method: 'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            First_name,
            Last_name,
            Email,
            Password
        })
    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },(error)=>{
        alert('Failed');
    })
}