import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [identifier, setIdentifier] = useState('');
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/login`, { identifier, pin });
            const { token } = response.data;

            // Save token to localStorage
            localStorage.setItem('token', token);

            // Redirect to dashboard or another route upon successful login
            toast.success('Login successful');
            navigate('/dashboard');
        } catch (error) {
            console.error('Login error:', error.response ? error.response.data : error.message);
            setError(error.response ? error.response.data.error : 'Server error');
            toast.error(error.response ? error.response.data.error : 'Server error');
        }
    };

    return (
        <div className="container mx-auto flex flex-col items-center px-4 py-24 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
            <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-50 text-gray-800 border hover:border hover:border-orange-600">
                <div className="mb-8 text-center">
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm text-gray-600">Sign in to access your account</p>
                </div>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-12">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="identifier" className="block mb-2 text-sm">Mobile Number or Email</label>
                            <input
                                type="text"
                                name="identifier"
                                id="identifier"
                                placeholder="Your mobile number or email"
                                value={identifier}
                                onChange={(e) => setIdentifier(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                required
                            />
                        </div>
                        <div>
                            <div className="flex justify-between mb-2">
                                <label htmlFor="pin" className="text-sm">PIN</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline text-gray-600">Forgot PIN?</a>
                            </div>
                            <input
                                type="password"
                                name="pin"
                                id="pin"
                                placeholder="*****"
                                value={pin}
                                onChange={(e) => setPin(e.target.value)}
                                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                                required
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div>
                            <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md bg-orange-600 text-gray-50 hover:bg-pink-700 transition-colors duration-300">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
                            <Link to="/registration" className="hover:underline text-orange-600"> Register</Link>.
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
