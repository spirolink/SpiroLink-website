import React, { createContext, useContext, useEffect, useState } from "react";

interface UserType {
  id: string;
  email: string;
  username: string;
  first_name?: string;
  last_name?: string;
  full_name?: string;
  is_verified: boolean;
  is_active: boolean;
}

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<UserType>;
  signup: (data: {
    email: string;
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    country?: string;
    company_name?: string;
  }) => Promise<UserType>;
  logout: () => void;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const API_BASE = '/api';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Sign Up
  const signup = async (data: {
    email: string;
    username: string;
    password: string;
    first_name?: string;
    last_name?: string;
    phone?: string;
    country?: string;
    company_name?: string;
  }): Promise<UserType> => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(`${API_BASE}/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Sign up failed');
      }

      const result = await response.json();
      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      return result.user;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Sign up failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Sign In
  const login = async (email: string, password: string): Promise<UserType> => {
    try {
      setError(null);
      setLoading(true);

      const response = await fetch(`${API_BASE}/auth/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.error || 'Login failed');
      }

      const result = await response.json();
      setUser(result.user);
      localStorage.setItem('user', JSON.stringify(result.user));
      return result.user;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Login failed';
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Logout
  const logout = () => {
    setUser(null);
    setError(null);
    localStorage.removeItem('user');
  };

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (err) {
        localStorage.removeItem('user');
      }
    }
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, error }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};
