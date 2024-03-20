'use client';

import { useState } from 'react';


const ParentCreationFrom = () => {

    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationemail, setConfirmationEmail] = useState('');

    function handleSurnameChange(event) {
        setSurname(event.target.value)
    };

    function handleNameChange(event) {
        setName(event.target.value)
    };

    function handleEmailChange(event) {
        setEmail(event.target.value)
    };

    function handleConfrimationEmailChange(event) {
        setConfirmationEmail(event.target.value)
    };

    return (
        <div>
            {/* surname */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Surname</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handleSurnameChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={surname}
                    />
                </div>
            </div>
            {/* name */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Name</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handleNameChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={name}
                    />
                </div>
            </div>
            {/* email */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Email Address ( optional )</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handleEmailChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={email}
                    />
                </div>
            </div>
            {/* email confirmation */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Confirm Email Address ( optional )</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handleConfrimationEmailChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={confirmationemail}
                    />
                </div>
            </div>
            <p className='py-4'></p>
            <button 
                className={`w-full text-center border focus:bg-[#ffcf2e] focus:text-white lg:hover:text-white active:bg-[#ffcf2e] lg:hover:bg-[#ffcf2e] border-white rounded-md bg-[#d0f0e4] text-black transition-all duration-300 py-1`}
            >
                add account
            </button>
        </div>
    )
};

export default ParentCreationFrom;