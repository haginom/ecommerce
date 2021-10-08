import React from 'react'

const LogInPage = ({logIn, userName, setUserName}) => {
  return (
    <div>
      <div className='title'>
          <h1>Account</h1>
          <h2>Login</h2>
        <hr></hr>
      </div>
        <button id="facebookLogin">Login with Facebook</button>
        <form className="signupForm">
          <label htmlFor="userName" class="visuallyhidden">
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="User Name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </label>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              />
            </label>
            <p>Forgot password?</p>
            <button onClick={logIn}>Login</button>
        </form>
        <hr></hr>
        <div className="createAccount">
          <h2>Not yet a member?</h2>
          <button value="Create an account">Create an account</button>
        </div>
    </div>
  )
}

export default LogInPage
