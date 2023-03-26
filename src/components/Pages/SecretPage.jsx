import {Redirect} from "react-router-dom";

const SecretPage = ({isLoggedIn}) => {
  if (!isLoggedIn) {
    return <Redirect to='/login'/>
  }

  return (
    <div className='box text-center rounded'>
      {isLoggedIn ? <h3>This page is full of secrets</h3> : <p>You should not see this</p>}
    </div>
  )
}

export default SecretPage;
