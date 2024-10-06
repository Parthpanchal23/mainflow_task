import React,{lazy,Suspense} from 'react'
import Loader from '../Ui/loader';
const Form = lazy(()=>import('../Auth/login/LoginForm'));
const LoginPage = () => {
  return (
    <div className='center'>
      <h1>Login</h1>
      <Suspense fallback={<Loader/>}>
      <Form/>
      </Suspense>
    </div>
  )
}

export default LoginPage