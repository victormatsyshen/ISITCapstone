import { useEffect, useState } from "react";
import {variables} from '../Variables';
import App from '../App';

function Login({setLogin}) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  // useEffect(()=>{
  //   fetch(variables.API_URL+'customer/'+inputs.Email)
  //   .then(response => response.json())
  //   .then(data => setRes(data))
  //   console.log(res);
  // }, [])


  return (
    <div className="Modal">
    <form className='forms'>
        <img className='logo' src='/static/media/crocLogo.6c89337032a4540d62e5.png' alt='Crocodile Logo'/>
        <hr/>
        <div className='Input'>
        <input 
          type="email"
          name="Email" 
          placeholder="Email"
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
        <button type="submit" onClick={Somthing(inputs.Email, inputs.Password)}>Log in</button>
        </div>
    </form>
    <div className="social-signin">
          <button className="fb">
            <i className="fa fa-facebook" aria-hidden="true">Facebook</i>
          </button>
          <button className="tw">
            <i className="fa fa-twitter" aria-hidden="true">Twitter</i>
          </button>
        </div>
        <a href="/signup">Want to register?</a>
    </div>
  )
}
export default Login;

function Somthing(Email, Password){
  const [res, setRes] = useState([])
  // useEffect(()=>{
  //   fetch(variables.API_URL+'customer/'+Email)
  //   .then(response => response.json())
  //   .then(data => setRes(data))
  //   console.log(res);
  // },[Email,res])
  if(Password === res.Password && Password != null){
    alert("it works")
  }
  App.setLogin(true);

}