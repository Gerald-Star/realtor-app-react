import React, { useState } from 'react'

export default function CreateListing() {
    //create a hook of formaData to define the type
    //destructure the type by destructuring the form data
    const [formData, setFormData] = useState ({
        type: "rent",
        name: "",
        bedrooms: 1,
        bathrooms: 1,
        parking: false,
        furnished: false,
        address: "",
        description: "",
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
    })

    const {type, name, bedrooms, bathrooms, parking, furnished, address, description, offer, regularPrice, discountedPrice} = formData

    function onChange() {}
  return (
    <main className='max-w-md px-2 mx-auto bg-orange-400 '>
    <h1 className='text-3xl text-center mt-6 font-medium'>
    Create home listing
    </h1>

    <form>
        <p className='text-lg mt-6 font-semibold'>
        sell / Rent
        </p>

        <div className='flex '>
         {/*make the onChange to be dynamic by using the backtick and dollar ${} */}
        
        <button type='button' id='type' value='sale'
        onClick={onChange} className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded 
        hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${type === "rent" ? "bg-white text-black"  : "bg-slate-600 text-white" }`}
        >
        Sell</button>

        <button type='button' id='type' value='sale'
        onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${type === "sale" ? "bg-white text-black"  : "bg-slate-600 text-white" }`}
        >
        Rent</button>
        </div>

        {/* Create a text area called Name*/}

        <p className='text-lg mt-6 font-semibold'>Name</p>

        <input type='text' id='name' value={name} onChange={onChange} placeholder='Name' maxLength='32' minLength='10' required
         className='w-full px-4 py-2 text-xl text-gray-700
         bg-white border border-gray-300 rounded transition
         duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />

         {/*Create two buttons beds and bath*/}
        <div className=' flex space-x-6 mb-6'>
        <div>
            <p className='text-lg font.semibold'>Beds</p>
            <input type='number' id='bedrooms' value ={bedrooms} onChange={onChange} min='1' max='10' required 
            className='px-4 py-2 text-xl text-gray-700 rounded
             bg-white border border-gray-700 transition duration-150 ease-in-out focus:text.gray-700
             focus:bg-white focus:border-slate-600 text-center'/>
        
        </div>
        
        
        <div>
            <p className='text-lg font.semibold'>Bath</p>
            <input type='number' id='bathrooms' value ={bathrooms} onChange={onChange} min='1' max='10' required 
            className='px-4 py-2 text-xl text-gray-700 rounded
             bg-white border border-gray-700 transition duration-150 ease-in-out focus:text.gray-700
             focus:bg-white focus:border-slate-600 text-center'/>
        
        </div>
        
        </div>


        {/*Create 2 buttons each for Parking spots and for Furnished */}

        {/*Parking Spot Buttons*/}
        <p className='text-lg mt-6 font-semibold'>Parking Spot</p>

        <div className='flex'>
         {/*Here make the onChange to be dynamic by using the backtick and dollar ${} */}
        
          {/*first parking spot button*/}
        <button 
        type='button' 
        id='parking' 
        value={true}
        onClick={onChange} 
        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${!parking 
            ? "bg-white text-black"  
            : "bg-slate-600 text-white" }`} >
            Yes</button>

        {/*second parking spot button*/}

        <button 
        type='button' 
        id='parking' 
        value={false}
        onClick={onChange} className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${parking 
            ? "bg-white text-black" 
            : "bg-slate-600 text-white" }`}
        >
        No</button>
        </div>

       {/* Furnished Button */}

       <p className='text-lg mt-6 font-semibold'>Furnished</p>

        <div className='flex '>
         {/*make the onChange to be dynamic by using the backtick and dollar ${} */}
        
        <button 
        type='button' 
        id='furnished' 
        value={true}
        onClick={onChange} 
        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${!furnished
            ? "bg-white text-black"  
            : "bg-slate-600 text-white" }`}
        >
        Yes</button>

        <button 
        type='button' 
        id='furnished' 
        value={false}
        onClick={onChange} 
        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${furnished
            ? "bg-white text-black"  
            : "bg-slate-600 text-white" }`}
            >
        No</button>
        </div>

        {/*create a text area called Address*/}

        <p className='text-lg mt-6 font-semibold'>Address</p>
        <textarea 
        type='text' 
        id='address' 
        value={address} 
        onChange={onChange} 
        placeholder='Address'
        required
         className='w-full px-4 py-2 text-xl text-gray-700
         bg-white border border-gray-300 rounded transition
         duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />


         {/*create a text area called Address*/}
         <p className='text-lg font-semibold'>Description</p>
         <textarea 
         type='text' 
         id='description' 
         value={description} 
         onChange={onChange} 
         placeholder='Description'
         required
          className='w-full px-4 py-2 text-xl text-gray-700
          bg-white border border-gray-300 rounded transition
          duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 mb-6' />
 
 

        <p className='text-lg font-semibold'>Offer</p>

        <div className='flex mb-6'>
         {/*make the onChange to be dynamic by using the backtick and dollar {`${}`} */}
        
        <button 
        type='button' 
        id='offer' 
        value={true}
        onClick={onChange} 
        className={`mr-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${!offer
            ? "bg-white text-black"  
            : "bg-slate-600 text-white" }`}
        >
        Yes</button>

        <button 
        type='button' 
        id='offer' 
        value={false}
        onClick={onChange} 
        className={`ml-3 px-7 py-3 font-medium text-sm uppercase shadow-md rounded hover:shadow-lg
        focus:shadow-lg active:shadow-lg transition duration-150 ease-in-out w-full
        ${offer
            ? "bg-white text-black"  
            : "bg-slate-600 text-white" }`}
            >
        No</button>
        </div>
        
        <div className='flex items-center mb-6'>
            <div className=''>
                <p className='text-lg font-semibold'>Regular price</p>
                <div className='flex w-full justify-center items-center space-x-6'>
                    <input 
                    type="number" 
                    id='regularPrice' 
                    value={regularPrice}
                    onChange={onChange} min="50" max="400000000000" required
                     className='w-full px-4 py-2 text-xl text-gray-700 bg-white border solid
                     border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                    />
                    {type === "rent" && (
                        <div className=""> <p className='text-md w-full whitespace-nowrap'> $ / Month</p> </div>) }
                </div>
                
            </div>
        </div>

        {/* discounted price with offer to be set true*/}


        {offer &&  (
        <div className='flex items-center mb-6'>
            <div className=''>
                <p className='text-lg font-semibold'>Discounted price</p>
                <div className='flex w-full justify-center items-center space-x-6'>
                    <input 
                    type="number" 
                    id='discountedPrice' 
                    value={discountedPrice}
                    onChange={onChange} 
                    min="50" 
                    max="400000000000" 
                    required={offer}
                     className='w-full px-4 py-2 text-xl text-gray-700 bg-white border solid
                     border-gray-300 rounded transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center'
                    />
                    {type === "rent" && (
                        <div className=""> 
                        <p className='text-md w-full whitespace-nowrap'> 
                        $ / Month</p> </div>
                        ) }
                </div>   
            </div>
        </div>
        )}

        <div className='mb-6'>
            <p className='text-lg font-semibold'>Upload Images</p>

            <p className='text-gray-600'>The first image will be the cover (max 6)</p>
             <input 
             type="file" 
             id="images" 
             onChange={onChange} 
             accept=".jpg,.png,.jpeg"
             multiple 
             required  
             className='w-full px-3 py-1.5 text-gray-700 bg-white border border-gray-600 rounded transition duration-150 ease-in-out focus:bg-white focus:border-slate-600'        />
        </div>
        <button className='mb-6 w-full px-7 py-3 bg-blue-900 text-white font-medium text-sm uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg
        active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out'
        type='submit'>
        Create Listing
        </button>
         </form>
    
    </main>
  )
}
