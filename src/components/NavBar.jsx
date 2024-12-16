import { useAuth } from '@/context/AuthContext';
import { Link } from 'react-router-dom';

const Navbar = ({ links }) => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between">
      <div className="font-bold text-lg">
        <Link to="/">E-Template Pro</Link>
      </div>
      <div className="space-x-4">
        {links.map((link) => (
          <Link key={link.href} to={link.href} className="hover:underline">
            {link.label}
          </Link>
        ))}
        {isAuthenticated ? (
          <button onClick={logout} className="bg-gray-700 p-2 rounded">
            Logout
          </button>
        ) : (
          <Link to="/login" className="bg-gray-200 text-blue-600 p-2 rounded">
            Login
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
