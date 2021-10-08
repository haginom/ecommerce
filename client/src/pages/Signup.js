import React, {useState} from 'react'
import LogInPage from '../components/loggingIn/LogInPage';
import LogOutPage from '../components/loggingIn/LogOutPage';

const SignUp = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [userName, setUserName] = useState("")
  const logIn = (event) => {
    event.preventDefault();
    setLoggedIn(!loggedIn)
  }
  if(loggedIn){
    return ( 
      <section className='page'>
        <LogOutPage logIn={logIn} userName={userName}/>
      </section>
    )
  } else{
    return (
      <section className='page'>
        <LogInPage logIn={logIn} userName={userName} setUserName={setUserName}/>
      </section>
    ) 
  } 
}

export default SignUp
