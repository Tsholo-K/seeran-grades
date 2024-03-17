'use client'

import { useState } from 'react';


const StudentCreationFrom = () => {

    const [id_number, setid_number] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('')

    var saIdParser = require('south-african-id-parser');

    function idNumber(event) {
        setid_number(event.target.value)
        var info = saIdParser.parse(event.target.value);
        if (info.isValid === false) {
        document.getElementById('validation').innerHTML = `invalid ID number`
        } else{
        document.getElementById('validation').innerHTML = ``
        }
    };

    function handleSurnameChange(event) {
        setSurname(event.target.value)
    };

    function handleNameChange(event) {
        setName(event.target.value)
    };

    function handleEmailChange(event) {
        setEmail(event.target.value)
    };

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value)
    };

    return (
        <div>
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 py-1">ID Number</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`number`}
                    onChange={idNumber}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={id_number}
                    />
                </div>
                <p id='validation' className='text-center text-sm text-red-600 pt-1'></p>
            </div>
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
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Phone Number ( optional )</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`text`}
                    onChange={handlePhoneNumberChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={phoneNumber}
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

export default StudentCreationFrom;