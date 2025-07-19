import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';
import { useAuth, ROLES } from '../context/AuthContext';

const { FiUser, FiLock, FiEye, FiEyeOff, FiGamepad2 } = FiIcons;

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Mock authentication with roles
    setTimeout(() => {
      if (formData.username && formData.password) {
        let role = ROLES.USER;
        // Mock role assignment based on username
        if (formData.username === 'admin') {
          role = ROLES.ADMIN;
        } else if (formData.username === 'moderator') {
          role = ROLES.MODERATOR;
        }

        const userData = {
          id: 1,
          username: formData.username,
          email: `${formData.username}@example.com`,
          level: 7,
          xp: 2850,
          tournaments: 12,
          wins: 8,
          joinDate: '2023-01-15',
          role
        };
        login(userData);
        navigate('/');
      } else {
        setError('Please fill in all fields');
      }
      setIsLoading(false);
    }, 1000);
  };

  // Rest of the component remains the same...
  // (Keep the existing JSX structure and just update the demo credentials section)

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      {/* ... (keep existing JSX) ... */}
      
      {/* Update Demo Credentials section */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-700"
      >
        <h3 className="text-sm font-medium text-gray-300 mb-2">Demo Credentials:</h3>
        <div className="text-xs text-gray-400 space-y-1">
          <p>Admin: <span className="text-purple-400">admin / password</span></p>
          <p>Moderator: <span className="text-purple-400">moderator / password</span></p>
          <p>User: <span className="text-purple-400">demo / password</span></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;