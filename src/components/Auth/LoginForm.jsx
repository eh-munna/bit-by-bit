import { useState } from 'react';
import { Link } from 'react-router';

export default function LoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Add your login logic here (e.g. API call)
  };

  return (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">
        Sign in to your account
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1 font-medium">
            Email Address
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

        <div className="text-sm text-center">
          Don’t have an account?{' '}
          <Link
            to="/register"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            Register
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-900 dark:bg-slate-200 text-white dark:text-gray-900 font-semibold py-3 px-6 rounded hover:bg-gray-700 dark:hover:bg-slate-300 transition-colors duration-300"
        >
          Sign In
        </button>
      </form>
    </>
  );
}
