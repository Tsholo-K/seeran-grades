'use client'

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";

// components
import Link from "next/link";


const LoginForm = () => {

  const router = useRouter()

  useEffect( () => {
    if (localStorage.getItem('Token')) {

      const { access, refresh } = JSON.parse(localStorage.getItem('Token'))
      // validate existing token
      const validateToken = async () =>{
        try {
          const response = await fetch(`http://localhost:8000/api/auth/verify/`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${access}`,
            },
          })
          // parse the response 
          const data = await response.json();
          // if token still valid re-login user
          if ( data.status && data.status  === 'success' ) {
            router.push(`/${localStorage.getItem('Role')}dashboard`);
          } else {
            // if the access token is invalid try to refresh it using the refresh token
            const response = await fetch(`http://localhost:8000/api/auth/refresh/`, {
              method: 'POST',
              headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json',
              },
              body: JSON.stringify({ refresh }),
            });
            // parse the response 
            const data = await response.json();
            if ( data.status && data.status  === 'success' ) {
              const decodedToken = jwtDecode(data.access);
              // store token in local storage
              localStorage.setItem('Token', JSON.stringify({'refresh': refresh, 'access': data.access}));
              localStorage.setItem('Role', decodedToken.role);
              // redirect to appropriate dashboard
              router.push(`/${decodedToken.role}dashboard`);
            } else {
              // else if the refresh token is also invalid, clear localstorage and let the user re-login
              localStorage.clear();
            }
          }  
        } catch (error) {
          console.log(error);
        }
      }
      validateToken();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Define state variables to store the values of the input fields
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [error, seterror] = useState('')

  // Event handler to update the email state when the input changes
  const handleEmailChange = (event) => {
    setemail(event.target.value);
    if ( event.target.value !== '' ) {
      seterror(``)
    };
  };

  // Event handler to update the password state when the input changes
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if ( event.target.value !== '' ) {
      seterror(``)
    };
  };

  // Event handler to submit the form
  const handleSubmit = async (event) => {
    event.preventDefault();
    // client side validation
    if ( email === '' ) {
      return seterror(`email field cannot be empty`)
    }
    if ( password === '' ) {
      return seterror(`password field cannot be empty`)
    }
    // try to send request
    try {
      // make post request to try and authenticate the user 
      const response = await fetch(`http://localhost:8000/api/auth/login/`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      // parse the response 
      const data = await response.json();
      // handle response
      if ( !data.error ) {
        const decodedToken = jwtDecode(data.access);
        // store token in local storage
        localStorage.setItem('Token', JSON.stringify(data));
        localStorage.setItem('Role', decodedToken.role);
        // redirect to appropriate dashboard
        router.push(`/${decodedToken.role}dashboard`);
      } else {
        seterror(data.error)
      }
    } catch (error) {
      console.error('Login failed: failed to submit form', error);
    }
    // reset all fields
    setemail('')
    setPassword('')
    seterror(``)
  };

  return (
    <>
      <form className="mx-auto w-[80%] lg:w-[60%]" onSubmit={handleSubmit}>
        <div className="my-4">
          <input
            type={'text'} 
            value={email} 
            onChange={handleEmailChange} 
            className="rounded-md px-5 py-1 w-full focus:outline-none" 
            placeholder={'email'} 
          />
        </div>
        <div className="mt-4">
          <input
            type={'password'} 
            value={password} 
            onChange={handlePasswordChange} 
            className="rounded-md px-5 py-1 w-full focus:outline-none" 
            placeholder={'password'} 
          />
        </div>
        <p className="h-[25px] my-1 text-center text-sm text-[#fe5244]">{error}</p>
        <button 
          type={`submit`} 
          className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-black text-white   transition-all duration-300 py-1`}
        >
            login
        </button>
        <p
          className="text-sm md:text-base w-full text-center pt-3 text-gray-400"
        >
          Don&apos;t have an account? <Link href={'/signin'} className=" text-[#fe5244] ">signin</Link>
        </p>
      </form>
    </>
  )
};

export default LoginForm;