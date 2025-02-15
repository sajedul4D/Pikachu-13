import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
        <header className='w-11/12 mx-auto  border-y-2 border-green-500 rounded-3xl bg-gradient-to-bl to-green-100'>

            <nav className='flex justify-between items-center p-1'>
                <div>
                    <h4 className='font-bold '><span className='text-yellow-500'>Welcome</span>  To </h4>
                    <div className='flex  justify-center items-center'>
                    <img className='w-5 h-5 object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzPfBVe6-_WmV30JjawlKsF_uk6VhEKIkWoA&s" alt="" />
                    <Link to="/" className='text-xl font-extrabold text-red-400'>Pikachu</Link>
                    </div>
                </div>
                <div>
                    <input className='p-2 rounded-2xl font-bold border-y-2 border-green-500' type="text" placeholder='Balance:tk-0000.00' />
                </div>
                <div>
                   {/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn text-white bg-green-700" onClick={()=>document.getElementById('my_modal_1').showModal()}>Add Balance</button>
<dialog id="my_modal_1" className="modal border-y-2 border-green-500 rounded-3xl">
  <div className="modal-box border-y-2 border-green-500 rounded-3xl">
    <h3 className="font-bold text-lg">Add Money</h3>
    <input className='mt-3 p-1 border-y-2 border-green-500 rounded-3xl ' type="text"  placeholder='Enter Your Amount'/>
    <p className="py-4 font-bold">Payment on: 
    </p>
    <div className='flex justify-center items-center gap-5 p-1'>
    <img className='w-10 h-10 object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxvgJvm8pauv0op6hHr7p1ogjMlBebOxyX7A&s" alt="" />
    <img className='w-10 h-10 object-cover ' src="https://www.observerbd.com/2021/04/20/observerbd.com_1618922147.jpg" alt="" />
    <img className='w-10 h-10 object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ysb2JM9-m_RKKu-OcrQarxlbt-3Sq-vCRA&s" alt="" />
   </div>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn text-white bg-green-700">Close</button>
      </form>
    </div>
  </div>
</dialog> 
                </div>
                <div className='flex gap-2'>
                <Link to="/login"><img  className='w-12 h-12' src="https://yt3.googleusercontent.com/luERBQ1QGPATBmi1deddteRC6fUSKthiAbnPDIyn_OsisRqfcB-YM4hjGnZVACHLILBVW7d2fQ=s900-c-k-c0x00ffffff-no-rj
                " alt="" /></Link>

                <Link to='/Account'>
                <img className='w-12 h-12 ml-5' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzYFFI2bX0ck3fpWTavZ91fRh7ZhFNqVxvJg&s" alt="" />
                </Link>

                </div>
            </nav>
        </header>
        </>
    );
};

export default Navbar;