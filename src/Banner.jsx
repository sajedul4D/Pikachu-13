import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
       <>
        <div className='mt-8 w-11/12 mx-auto  '>
                <div className='flex  gap-3'>

                <div className='w-3/4 border-y-2 border-green-500 rounded-3xl   bg-gradient-to-bl p-5 to-green-100'>
                <img className='rounded-2xl' src="/image/Screenshot 2025-02-15 212607.png" alt="" />
                </div>
                <div className='w-1/5 border-y-2 border-green-500 rounded-3xl  bg-gradient-to-bl to-green-100 '>
                   <div className=' my-2 mx-1 rounded-2xl'>
                   <button className=' btn  bg-green-700 p-2   w-full text-white'><Link to='/history'>Toll History</Link>
                   
                   
                   </button>
                   </div>
                   <hr />
                   <div className=' my-2 mx-1 rounded-2xl'>
                   <button className=' btn  bg-green-700 p-2   w-full text-white '><Link to="/recharge">Recharge History</Link></button>
                   </div>
                   <hr />
                    

                </div>


                </div>
                

            </div>

       
       </>
    );
};

export default Banner;