import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='w-11/12 mx-auto  bg-gradient-to-bl to-green-100'>
           <div className='w-1/6 mx-auto border-b'>
           <img className='w-20 h-20 ml-5' src="https://yt3.googleusercontent.com/luERBQ1QGPATBmi1deddteRC6fUSKthiAbnPDIyn_OsisRqfcB-YM4hjGnZVACHLILBVW7d2fQ=s900-c-k-c0x00ffffff-no-rj" alt="" />

           </div>
           <div className='flex justify-center items-center mt-5'>
            <form >

                <div className='grid grid-cols-2 gap-5'>
              
             <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="text" name="name" id="" placeholder='Name :' required />
             
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="email" name="email" id="" placeholder='Email:' required />
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' placeholder='NID Number' required type="text" name='NID Num' />
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="text" placeholder='Car Plate Number'  required name=' '/>
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="text" name="" id="" placeholder='Car Registration Number'  required/>
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="password" name="" id=""  placeholder='Password' required/>
                </div>
            </form>
           
           </div>
           <button className='btn bg-green-600 mt-5'>Submit</button>
           <div className='mt-2'>
            <h2 className='font-bold'>You have Allrady Account? <Link className='bg-green-700 p-1 rounded-2xl text-xs' 
            to="/Account">Login</Link></h2>
           </div>
        </div>
    );
};

export default Login;