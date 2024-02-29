'use client'

import { useState } from "react";

// components
import Button from "./button";
import Link from "next/link";


const LoginForm = () => {

    // Define state variables to store the values of the input fields
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('')

  // Event handler to update the username state when the input changes
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  // Event handler to update the password state when the input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Event handler to submit the form
  const handleSubmit = (event) => {
    event.preventDefault();
    // client side validation
    if ( email === '') {
      return seterror(`username can not be empty`)
    }
    if ( password === '') {
      return seterror(`password can not be empty`)
    }

    fetch(`http://13.244.109.72:8000/api/auth/login`, {
      method: 'post',
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then((result) => {
        return result.json()
      })
      .then( (results) => {
        console.log(results)
      })
      .catch((err) => {
        err
      })
    
  };

  return (
    <>
        <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={handleSubmit}>
            <div className="my-4">
                <input 
                    type={'text'} 
                    value={email} 
                    onChange={handleemailChange} 
                    className="border rounded-md px-5 py-1 w-full focus:outline-none" 
                    placeholder={'email'} 
                />
            </div>
            <div className="mt-4">
                <input 
                    type={'password'} 
                    value={password} 
                    onChange={handlePasswordChange} 
                    className="border rounded-md px-5 py-1 w-full focus:outline-none" 
                    placeholder={'password'} 
                />
            </div>
            <p className="h-[25px] my-1 text-center text-sm text-[#fe5244]">{error}</p>
            <Button title={'login'} type={'submit'}/>
            <p className="text-sm md:text-base w-full text-center pt-3 text-gray-400">Don&apos;t have an account? <Link href={'/signin'} className=" text-[#fe5244] ">signin</Link></p>
        </form>
    </>
  )
};

export default LoginForm;