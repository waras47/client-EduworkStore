import React, { useState } from 'react'
import { Button, Card, FormControl, InputPassword, InputText, LayoutOne } from 'upkit'
import { Link, useHistory } from 'react-router-dom';
import StoreLogo from '../../components/StoreLogo';
import {useForm} from 'react-hook-form';
import { rules } from '../Register/validation';
import { loginUser } from '../../app/api/auth';
import { useDispatch } from 'react-redux';
import {userLogin} from '../../app/features/Auth/action';

const statusList = {
  idle: 'idle',
  process: 'process',
  success: 'success',
  error: 'error',
}



export default function Login() {

  const {register, handleSubmit, formState: {errors}, setError} = useForm();
  const [status, setStatus] = useState(statusList.idle);
  const dispatch = useDispatch();
  const history = useHistory();


  const onSubmit = async (formData) => {
    setStatus(statusList.process);
    const { data } = await loginUser(formData);
    if(data.error){
      setError('password',  {type : 'InvalidCredential', message: data.message});
      setStatus(statusList.error);
    }else {
      const {user, token} = data;
      dispatch(userLogin({user, token}));
      history.push('/');
    }

    setStatus(statusList.success)
  }
  return (
    <div style={{marginTop: '100px'}}>
      <LayoutOne size="small">
      <Card color="white">
        <div className="text-center mb-5">
          <StoreLogo/>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl errorMessage={errors.message?.message}>
            <InputText   {...register('email', rules.email)} placeholder="Email" fitContainer />
          </FormControl>
          <FormControl errorMessage={errors.password?.messages}>
            <InputPassword  {...register('password', rules.passwords)}  placeholder="Password" fitContainer />
          </FormControl>
          <Button 
            size="large" 
            fitContainer
            disabled={status === statusList.process}
          >{status === statusList.process ? "Sedang memproses...": "Login"}</Button>
        </form>
        <div className="text-center mt-2">
          belum punya akun? <Link to="/register"> <b style={{textDecoration: 'underline'}}> Daftar Sekarang. </b> </Link>
        </div>
      </Card>
    </LayoutOne>
    </div>
  )
}
