import React from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <>
         <div className='w-11/12 mx-auto  bg-gradient-to-bl to-green-100'>
           <div className='w-1/6 mx-auto border-b'>
           <img className='w-20 h-20 ml-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYFFI2bX0ck3fpWTavZ91fRh7ZhFNqVxvJg&s" alt="" />

           </div>
           <div className='flex  justify-center items-center mt-10 '>
            <form >

                <div className=' flex flex-col gap-5'>
              
             
             
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="email" name="email" id="" placeholder='Email:' required />
               
               
               <input className='p-1 border-y-2 border-green-500 rounded-2xl font-bold' type="password" name="" id=""  placeholder='Password' required/>
                </div>
            </form>
           
           </div>
           <button className='btn bg-green-600 mt-5'>Submit</button>
           <div className='mt-2'>
            <h2 className='font-bold'>Are You New ! <Link className='bg-green-500 p-0.5 text-xs rounded-3xl' to="/login">SingUp</Link> </h2>
           </div>
        </div>
        </>
    );
};

export default Account;