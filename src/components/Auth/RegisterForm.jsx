import { useState } from 'react';
import { Link } from 'react-router';

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const { name, email, password, confirmPassword, termsAccepted } = formData;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your submission logic here (e.g. API call)
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">User Registration</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label htmlFor="password" className="block mb-1 font-medium">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-slate-400"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword" className="block mb-1 font-medium">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-slate-400"
            required
          />
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={termsAccepted}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label htmlFor="termsAccepted" className="text-sm">
            I agree to the Terms and Conditions
          </label>
        </div>

        <div className="text-sm text-center">
          Don’t have an account?{' '}
          <Link
            to="/"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Login
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-slate-200 text-white dark:text-gray-900 font-semibold py-3 px-6 rounded hover:bg-gray-700 dark:hover:bg-slate-300 transition-colors duration-300"
        >
          Sign Up
        </button>
      </form>
    </>
  );
}
