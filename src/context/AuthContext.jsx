import { createContext, useContext, useState, useCallback } from 'react';
import { TOKEN_KEY, USER_KEY } from '../constants';

const AuthContext = createContext(null);

// Mock student user
const MOCK_USER = {
  id: 1,
  name: 'Student User',
  email: 'student@eduerp.com',
  role: 'student',
  avatar: null,
  school: 'EduERP International School',
};

const MOCK_PASSWORD = 'student123';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem(USER_KEY);
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => localStorage.getItem(TOKEN_KEY));

  const login = useCallback(async ({ email, password }) => {
    // Mock authentication
    await new Promise((r) => setTimeout(r, 800));
    if (email === MOCK_USER.email && password === MOCK_PASSWORD) {
      const mockToken = `mock_token_${Date.now()}`;
      setUser(MOCK_USER);
      setToken(mockToken);
      localStorage.setItem(TOKEN_KEY, mockToken);
      localStorage.setItem(USER_KEY, JSON.stringify(MOCK_USER));
      return { success: true, user: MOCK_USER };
    }
    throw new Error('Invalid email or password');
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
  }, []);

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider value={{ user, token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
