import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
    return (
        <>
        <header className='m-0 p-0 mx-auto  border-y-2 border-green-500 rounded-3xl bg-gradient-to-bl to-green-100'>

            <nav className='flex justify-between items-center p-6'>
                <div>
                    <h4 className='font-bold '><span className='text-yellow-500 text-xl'>Welcome</span>  To </h4>
                    <div className='flex  justify-center items-center'>
                    <img className='w-5 h-8 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPfBVe6-_WmV30JjawlKsF_uk6VhEKIkWoA&s" alt="" />
                    <Link to="/" className='text-2xl font-extrabold text-red-400'>Pikachu</Link>
                    </div>
                </div>
                
                <div className='flex gap-16 justify-center items-center'>
                  
                <div>
                    <input className='p-3 rounded-2xl font-bold border-y-2 border-green-500' type="text" placeholder='Balance:tk-0000.00' />
                </div>
                <div className='po'>
                <div className="flex items-center justify-center bg-gray-100">
      <button onClick={() => setIsOpen(true)} className="bg-green-700 text-white   rounded-lg shadow-md p-3 font-bold">
        Add Balance
      </button>

      {isOpen && (
        <div className="overflow-auto  fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
          <div className=" bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full relative">
            <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 text-white text-3xl font-extrabold bg-green-700 rounded-full p-1 hover:text-gray-700">✕</button>
            <h2 className="text-2xl font-bold mb-4 ">Add Money</h2>
            <hr />
            <h4 className='font-bold mt-2'>Select Payment Mathod</h4>
           <div className='mb-4 flex justify-center items-end flex-wrap gap-8 mt-3 '>
            <img className='w-24 h-24 object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3no113HIfYGlfiWW58lJVwmAXif0Plr9Jkg&s" alt="" />
            <img className='w-24 h-24 object-cover ' src="https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png" alt="" />
            <img className='w-24 h-24 object-cover ' src="https://www.logo.wine/a/logo/BKash/BKash-Icon-Logo.wine.svg" alt="" />
            <img className='w-20 h-20 object-contain' src="https://www.vhv.rs/dpng/d/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png" alt="" />
           </div>
            
          </div>
        </div>
      )}
    </div>

                </div>
                <div>
                  
                </div>

                </div>
                <div className='flex gap-16'>
                <Link to="/login"><img  className='w-20 h-16' src="https://yt3.googleusercontent.com/luERBQ1QGPATBmi1deddteRC6fUSKthiAbnPDIyn_OsisRqfcB-YM4hjGnZVACHLILBVW7d2fQ=s900-c-k-c0x00ffffff-no-rj
                " alt="" /></Link>

                <Link to='/Account'>
                <img className='w-20 h-16 ml-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYFFI2bX0ck3fpWTavZ91fRh7ZhFNqVxvJg&s" alt="" />
                </Link>

                </div>
            </nav>
        </header>
        </>
    );
};

export default Navbar;