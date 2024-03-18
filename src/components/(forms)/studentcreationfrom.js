'use client';

import { useState } from 'react';


const StudentCreationFrom = () => {

    const [nationality, setNationality] = useState(`--- Citizen/Resident ---`);
    const [id_number, setid_number] = useState('');
    const [passportnumber, setPassportNumber] = useState('');
    const [surname, setSurname] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmationemail, setConfirmationEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [grade, setGrade] = useState('');

    var saIdParser = require('south-african-id-parser');

    function handleNationality(event) {
        setNationality(event.target.value)
    };

    function idNumber(event) {
        setid_number(event.target.value)
        var info = saIdParser.parse(event.target.value);
        if (info.isValid === false) {
        document.getElementById('validation').innerHTML = `invalid ID number`
        } else{
        document.getElementById('validation').innerHTML = ``
        }
    };

    function handlePassportNumber(event) {
        setPassportNumber(event.target.value)
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

    function handleConfrimationEmailChange(event) {
        setConfirmationEmail(event.target.value)
    };

    function handlePhoneNumberChange(event) {
        setPhoneNumber(event.target.value)
    };

    function handleGradeChange(event) {
        setGrade(event.target.value)
    };

    return (
        <div>
            {/* nationality confrimation */}
            <div className="py-2 mt-6">
                <p className="text-sm text-gray-400 pl-2 py-1">South African Citizen/Resident?</p>
                <select value={nationality} onChange={handleNationality} className='bg-white rounded-xl h-9 w-full'>
                    <option disabled className='text-center' >--- Citizen/Resident ---</option>
                    <option value={`yes`} className='text-center'>Yes</option>
                    <option value={`no`} className='text-center'>no</option>
                </select>
            </div>
            {/* ID number  */}
            <div className={`py-2 transition-all duration-1000 ease-linear ${ nationality === 'yes' ? 'block' : 'hidden'} `}>
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
            {/* passport number */}
            <div className={`py-2 transition-all duration-1000 ease-linear ${ nationality === 'no' ? 'block' : 'hidden'} `}>
                <p className="text-sm text-gray-400 pl-2 py-1">Passport Number</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`number`}
                    onChange={handlePassportNumber}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={passportnumber}
                    />
                </div>
                <p id='validation' className='text-center text-sm text-red-600 pt-1'></p>
            </div>
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
            {/* phone number */}
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
            {/* grade */}
            <div className="py-2">
                <p className="text-sm text-gray-400 pl-2 py-1">Grade</p>
                <div className="rounded-xl bg-white mb-1">
                    <input
                    type={`number`}
                    onChange={handleGradeChange}
                    className="w-full text-base rounded-xl h-10 px-4 focus:outline-none resize-none"
                    value={grade}
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