

import axios from 'axios';
import { useState } from 'react';

const Registration = () => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
                name,
                pin,
                mobileNumber,
                email
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className=' p-4 border-t rounded-xl shadow-2xl bg-neutral-100 w-[50%] justify-center items-center'>
            <h2 className='text-xl font-bold'>Registration</h2>
            <form
                onSubmit={handleSubmit}
                className='space-y-4' >
                <div>
                    <label>Name:</label>
                    <br />
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className='p-1 rounded-md' />
                </div>
                <div>
                    <label>PIN (5-digit number):</label>
                    <br />
                    <input
                        type="text"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        required
                        className='p-2 rounded-md' />
                </div>
                <div>
                    <label>Mobile Number:</label>
                    <br />
                    <input
                        type="text"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                        required
                        className='p-2 rounded-md' />
                </div>
                <div>
                    <label>Email:</label>
                    <br />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='p-2 rounded-md' />
                </div>
                <button 
                 type="submit"
                 className='btn bg-pink-500 hover:bg-pink-700 text-white'>Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Registration;
