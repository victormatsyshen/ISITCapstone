import { useState } from "react";
import GoogleLogin from "react-google-login";

function Login() {

    const [loginData, setLoginData] = useState(
        localStorage.getItem('loginData')
          ? JSON.parse(localStorage.getItem('loginData'))
          : null
    );

    const handleFailure = (result) => {
        alert(result);
        //console.log('Login Failed: ', res);
      };

    const handleLogin = async (googleData) => {
      const res = await fetch('/api/google-login', {
        method: 'POST',
        body: JSON.stringify({
          token: googleData.tokenId,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await res.json();
      setLoginData(data);
      localStorage.setItem('loginData', JSON.stringify(data));

    };

    const handleLogout = () => {
        alert("You have been logged out successfully.");
        localStorage.removeItem('loginData');
        setLoginData(null);
    };

    return (
        <div>
            <div>
                {loginData ? (
                <div>
                    <h3>Hello, {loginData.name}</h3>
                    <h3>You are logged in as {loginData.email}</h3>
                    <button onClick={handleLogout}>Logout</button>
                </div>
                ) : (
                <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log In"
                    onSuccess={handleLogin}
                    onFailure={handleFailure}
                    cookiePolicy={'single_host_origin'}
                    //isSignedIn={true}
                ></GoogleLogin>
                )}
            </div>
        </div>
    );
}

export default Login;