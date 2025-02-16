import React, { useState } from 'react';


const Banner = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [isOpens, setIsOpens] = useState(false);
    return (
       <>
        <div className='mt-8 w-11/12 mx-auto  '>
                <div className='flex  gap-3'>

                <div className='w-3/4 border-y-2 border-green-500 rounded-3xl   bg-gradient-to-bl p-5 to-green-100'>
                <img className='rounded-2xl h-[400px] w-full object-cover' src="https://acropolium.com/img/articles/gps-tracking/img01.jpg" alt="" />
                </div>
                <div className='w-1/5 border-y-2 border-green-500 rounded-3xl  bg-gradient-to-bl to-green-100 '>
                   <div className=' my-2 mx-1 rounded-2xl'>
                     {/* sssss */}
     
                     <div className="flex items-center justify-center  ">
      <button 
        onClick={() => setIsOpen(true)} 
        className="btn px-4 py-2 bg-green-700 w-full text-white  border-y-2 border-green-500 rounded-2xl text-bold text-xl "
      >
        History
      </button>

      {isOpen && (
        <div className=" fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="border-y-2 border-green-500 rounded-3xl bg-white  bg-gradient-to-bl to-green-100 p-6 shadow-lg w-[800px] h-[450px] relative overflow-auto">
            <div className='flex justify-center items-center'>
            <button 
              onClick={() => setIsOpen(false)} 
              className="absolute top-0 left-0 m-4 px-3 py-1 bg-green-700 font-bold text-white rounded hover:bg-red-600  "
            >
             
             Close
             
            </button>
            <h2 className="text-xl font-bold mb-4  text-center">Troll History</h2>
            </div>
            

            <div className=" overflow-x-auto">
  <table className=" w-[700px] mx-auto border border-gray-300">
    <thead className="bg-gray-200">
      <tr>
        <th className="px-4 py-2  border-b">Date</th>
        <th className="px-4 py-2  border-b">Time</th>
        <th className="px-4 py-2  border-b">Location</th>
        <th className="px-4 py-2  border-b">Amount</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold ">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold  text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-y-2 border-green-700 font-bold ">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka ,Banglash</td>
        <td className="px-4 py-2 border-b font-bold  text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold ">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold ">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka, Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
      <tr className="hover:bg-gray-100">
        <td className="px-4 py-2 border-b font-bold">11/11/2025</td>
        <td className="px-4 py-2 border-b font-bold">11.30pm</td>
        <td className="px-4 py-2 border-b font-bold">Dhaka ,Banglash</td>
        <td className="px-4 py-2 border-b font-bold text-green-600">tk:450.00</td>
      </tr>
    
      
    </tbody>
  </table>
</div>

           
          </div>
        </div>
      )}
    </div>
     
        {/* sssss */}

        
                   </div>
                   <hr />
                   <div className=' my-2 mx-1 rounded-2xl'>
                   <div className="flex items-center justify-center  ">
      <button 
        onClick={() => setIsOpens(true)} 
        className="btn px-4 py-4 bg-green-700 w-full text-white  border-y-2 border-green-500 rounded-2xl text-bold text-xl  "
      >
       Rechagre
      </button>

      {isOpens && (
        <div className=" fixed inset-0  bg-opacity-50 flex items-center justify-center z-50 ">
          <div className="border-y-2 border-green-500 rounded-3xl bg-white  bg-gradient-to-bl to-green-100 p-6 shadow-lg w-[800px] h-[450px] relative overflow-auto">
            <div className='flex justify-center items-center'>
            <button 
              onClick={() => setIsOpens(false)} 
              className="absolute top-0 left-0 m-4 px-3 py-1 bg-green-700 text-white rounded hover:bg-red-600 font-bold  "
            >
             
             Close
             
            </button>
            <h2 className="text-xl font-bold mb-4  text-center"> Recharge  History</h2>
           
            </div>
            

            <div className=" overflow-x-auto">
  <table className=" w-[700px] mx-auto border-y-2 border-green-300">
    <thead className="bg-green-100">
      <tr className='h-[70px] items-center'>
        <th className="px-4 py-2  border-b">Car Number</th>
        <th className="px-4 py-2  border-b">Date</th>
        <th className="px-4 py-2  border-b">Amount</th>
        <th className="px-4 py-2  border-b">Sataus</th>
        <th className="px-4 py-2  border-b">Paymen Method</th>
      </tr>
    </thead>
    <tbody>
      
      <tr className="hover:bg-gray-100 h-[70px] items-center">
        <td className="px-4 py-2 border-b font-semibold">18-7474</td>
        <td className="px-4 py-2 border-b font-semibold">11/11/2025</td>
        
        <td className="px-4 py-2 border-b font-semibold">BDT:500</td>
        <td className="px-4 py-2 border-b"><img className='w-10 h-10 mx-auto' src="https://img.icons8.com/?size=48&id=HxdOcoesMKEc&format=png" alt="" /></td>
        <td className="px-4 py-2 border-b font-bold "><img className='w-16 h-16 mx-auto object-cover' src="https://freelogopng.com/images/all_img/1656234782bkash-app-logo.png" alt="" /></td>
      </tr>
      <tr className="hover:bg-gray-100 h-[70px] items-center">
        <td className="px-4 py-2 border-b font-semibold">18-7474</td>
        <td className="px-4 py-2 border-b font-semibold">11/11/2025</td>
        
        <td className="px-4 py-2 border-b font-semibold">BDT:500</td>
        <td className="px-4 py-2 border-b"><img className='w-10 h-10 mx-auto' src="https://img.icons8.com/?size=32&id=wyyqTltGIczA&format=png&color=FA5252" alt="" /></td>
        <td className="px-4 py-2 border-b font-bold "><img className='w-16 h-16 mx-auto object-contain' src="https://www.logo.wine/a/logo/Paytm/Paytm-Logo.wine.svg" alt="" /></td>
      </tr>
      
      
     
      
      <tr className="hover:bg-gray-100 h-[70px] items-center">
        <td className="px-4 py-2 border-b font-semibold">18-7474</td>
        <td className="px-4 py-2 border-b font-semibold">11/11/2025</td>
        
        <td className="px-4 py-2 border-b font-semibold">BDT:500</td>
        <td className="px-4 py-2 border-b"><img className='w-10 h-10 mx-auto' src="https://img.icons8.com/?size=48&id=HxdOcoesMKEc&format=png" alt="" /></td>
        <td className="px-4 py-2 border-b font-bold "><img className='w-16 h-16 mx-auto object-contain' src="https://www.vhv.rs/dpng/d/496-4962280_nagad-logo-transparent-bkash-logo-png-png-download.png" alt="" /></td>
      </tr>
      <tr className="hover:bg-gray-100 h-[70px] items-center">
        <td className="px-4 py-2 border-b font-semibold">18-7474</td>
        <td className="px-4 py-2 border-b font-semibold">11/11/2025</td>
        
        <td className="px-4 py-2 border-b font-semibold">BDT:500</td>
        <td className="px-4 py-2 border-b"><img className='w-10 h-10 mx-auto' src="https://img.icons8.com/?size=48&id=HxdOcoesMKEc&format=png" alt="" /></td>
        <td className="px-4 py-2 border-b font-bold "><img className='w-16 h-16 mx-auto object-contain' src="https://pngtom.com/files/preview/960x960/317020431739wsqe06kdzz8abbcj9ubb1txjumovorxogdiwsxfdahjy5lxcole5zugbetwsrclps4hvvlt84nfffvkb7aeykoiptprmrlpzsux.png" alt="" /></td>
      </tr>
    
      
       </tbody>
  </table>
</div>

           
          </div>
        </div>
      )}
    </div>
                   
   
                   </div>
                   <hr />
                    

                </div>


                </div>
                

            </div>

       
       </>
    );
};

export default Banner;