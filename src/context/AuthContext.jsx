import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const ROLES = {
  ADMIN: 'admin',
  MODERATOR: 'moderator',
  USER: 'user'
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('gameHubUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const hasRole = (requiredRole) => {
    if (!user) return false;
    if (user.role === ROLES.ADMIN) return true;
    if (user.role === ROLES.MODERATOR && requiredRole !== ROLES.ADMIN) return true;
    return user.role === requiredRole;
  };

  const login = (userData) => {
    // Assign default role if not provided
    const userWithRole = {
      ...userData,
      role: userData.role || ROLES.USER
    };
    setUser(userWithRole);
    localStorage.setItem('gameHubUser', JSON.stringify(userWithRole));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('gameHubUser');
  };

  const register = (userData) => {
    const newUser = {
      ...userData,
      id: Date.now(),
      joinDate: new Date().toISOString(),
      level: 1,
      xp: 0,
      tournaments: 0,
      wins: 0,
      role: ROLES.USER // Default role for new users
    };
    setUser(newUser);
    localStorage.setItem('gameHubUser', JSON.stringify(newUser));
  };

  const value = {
    user,
    login,
    logout,
    register,
    loading,
    hasRole
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};