import './App.css';
import GoogleLogin, { GoogleLogout } from 'react-google-login';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

function App() {
  useEffect(() => {
    function start() {
    gapi.client.init({
    clientId:"991129247780-29gjg4u9g1tarkmd8d4s4n6oi7je5erb.apps.googleusercontent.com",
    scope: 'email',
      });
       }
      gapi.load('client:auth2', start);
       }, []);
  const responseGoogle = (response) => {
    console.log(response.tokenId);
  };
  const onFailure = response => {
    console.log('FAILED', response);
    };
   const onLogoutSuccess = () => {
    console.log('SUCESS LOG OUT');
     };
  return (
    <div className="App">
      <GoogleLogin
        clientId="991129247780-29gjg4u9g1tarkmd8d4s4n6oi7je5erb.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={onFailure}
        cookiePolicy="single_host_origin"
      />
      <GoogleLogout
    clientId={"991129247780-29gjg4u9g1tarkmd8d4s4n6oi7je5erb.apps.googleusercontent.com"}

    onLogoutSuccess={onLogoutSuccess}

      />
    </div>
  );
}

export default App;
