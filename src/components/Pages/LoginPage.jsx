import {Redirect} from "react-router-dom";

const LoginPage = ({isLoggedIn, onLogin}) => {
  if (isLoggedIn) {
    return <Redirect to='/'/>
  }

  return (
    <div className='box rounded'>
      <p>Login to see secret page</p>
      <button
        className='btn btn-primary'
        onClick={onLogin}
      >
        Log In
      </button>
    </div>
  )
}

export default LoginPage;
