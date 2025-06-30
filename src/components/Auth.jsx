import Button from '@/components/ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/auth/actions';

export default function Auth() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleAuth = () => {
    if (isAuthenticated) {
      dispatch(logout());
    } else {
      dispatch(login());
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mt-12 bg-transparent transition-colors duration-300 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h1 className="text-4xl font-extrabold mb-6 tracking-tight text-gray-800 dark:text-slate-100">
        Authentication
      </h1>

      <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-8">
        {isAuthenticated ? 'You are logged in.' : 'You are logged out.'}
      </div>

      <div className="flex gap-4">
        <Button
          onClick={handleAuth}
          className={`cursor-pointer px-5 py-2 rounded-lg shadow-md transition-all duration-300 text-white ${
            isAuthenticated
              ? 'bg-red-500 hover:bg-red-600'
              : 'bg-green-500 hover:bg-green-600'
          }`}
        >
          {isAuthenticated ? 'Logout' : 'Login'}
        </Button>
      </div>
    </div>
  );
}
