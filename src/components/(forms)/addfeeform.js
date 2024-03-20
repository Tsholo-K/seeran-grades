'use client'

import { useState, useEffect } from "react";


const AddFeeFrom = ({ existing_fee }) => {

    const [fee, setFee] = useState()
    const [amount, setAmount] = useState()

    useEffect(() => {
        if ( existing_fee ) {
            setAmount(existing_fee.info)
            setFee(existing_fee.title)
        }
    }, [existing_fee])
    
    

    function handleFeeChange(event)  {
        setFee(event.target.value)
    }

    function handleAmountChange(event)  {
        setAmount(event.target.value)
    }

    return (
        <div>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black   transition-all duration-300 py-1`}
            >
                { existing_fee ? `save` : `add` }
            </button>
            <p className="text-sm text-gray-400 text-center pt-1">this will notify every parent account</p>
            <p className="text-sm pl-2 text-gray-400 pt-8">fee</p>
            <input
                onChange={handleFeeChange}
                type='text'
                className="w-full text-base rounded-xl h-10 px-3 focus:outline-none resize-none"
                value={fee}
            />
            <p className="text-sm pl-2 text-gray-400 pt-4">amount</p>
            <div className="relative">
                <input
                    onChange={handleAmountChange}
                    type='number'
                    className="w-full text-base rounded-xl h-10 px-8 focus:outline-none resize-none"
                    value={amount}
                />
                <p className="absolute left-4 top-[9px]">R</p>
            </div>
            <p className="py-6"></p>
            {
                existing_fee &&
                <button 
                    className={`w-full text-center border focus:bg-red-500 focus:text-white lg:hover:text-white active:bg-red-500 lg:hover:bg-red-500 border-white rounded-md bg-[#d0f0e4] text-black   transition-all duration-300 py-1`}
                >
                    remove
                </button>
            }
            
        </div>
    )
};

export default AddFeeFrom;