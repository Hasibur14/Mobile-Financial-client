import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Registration = () => {
    const [name, setName] = useState('');
    const [pin, setPin] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

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
            toast.success('Registration Successful. Waiting for admin approval.');
            navigate('/login');
        } catch (error) {
            setMessage(error.response?.data?.error || 'Server error');
            toast.error(error.response?.data?.error || 'Server error');
        }
    };

    return (
        <div className='container mx-auto flex flex-col items-center px-4 py-24 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-5xl'>
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Register Now</h1>
                    <p className="text-sm text-gray-600">Create your account</p>
                </div>
                {message && <p className="text-red-500 text-center">{message}</p>}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="pin" className="block mb-2 text-sm">PIN (5-digit number)</label>
                        <input
                            type="password"
                            id="pin"
                            value={pin}
                            onChange={(e) => setPin(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="mobileNumber" className="block mb-2 text-sm">Mobile Number</label>
                        <input
                            type="text"
                            id="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full px-8 py-3 font-semibold rounded-md bg-orange-600 text-white hover:bg-pink-700 transition-colors duration-300"
                    >
                        Register
                    </button>
                    <p className="px-6 text-sm text-center text-gray-600">Already have an account?
                        <Link to="/login" className="hover:underline text-orange-600">Login</Link>.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Registration;
