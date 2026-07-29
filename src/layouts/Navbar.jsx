import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiOutlineMenuAlt2,
  HiOutlineSearch,
  HiOutlineBell,
  HiOutlineSun,
  HiOutlineMoon,
  HiOutlineLogout,
  HiOutlineUser,
  HiOutlineCog,
  HiOutlineX,
  HiOutlineChevronDown,
} from 'react-icons/hi';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { dialog } from '../utils/dialog';
import { notify } from '../utils/notify';
import { Avatar } from '../components/ui';
import { RECENT_ACTIVITIES } from '../data/mockData';
import dayjs from 'dayjs';

export default function Navbar({ collapsed, onToggleSidebar, onToggleMobile }) {
  const { isDark, toggleTheme } = useTheme();
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const notifRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handler = (e) => {
      if (notifRef.current && !notifRef.current.contains(e.target)) setNotifOpen(false);
      if (profileRef.current && !profileRef.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = async () => {
    const result = await dialog.logout();
    if (result.isConfirmed) {
      logout();
      notify.success('Logged out successfully');
      navigate('/login');
    }
  };

  const unreadCount = 3;

  return (
    <header
      className={`fixed top-0 right-0 z-40 bg-white/80 dark:bg-erp-dark-card/80 backdrop-blur-sm border-b border-erp-border dark:border-erp-dark-border shadow-navbar transition-all duration-300`}
      style={{ left: collapsed ? 72 : 272 }}
    >
      <div className="flex items-center gap-3 px-5 h-16">
        {/* Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="hidden lg:flex w-9 h-9 items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <HiOutlineMenuAlt2 className="w-5 h-5 text-erp-text dark:text-erp-dark-text" />
        </button>
        {/* Mobile menu toggle */}
        <button
          onClick={onToggleMobile}
          className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          <HiOutlineMenuAlt2 className="w-5 h-5 text-erp-text dark:text-erp-dark-text" />
        </button>

        {/* Global Search */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <HiOutlineSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-erp-muted" />
            <input
              type="text"
              placeholder="Search students, teachers..."
              className="form-input pl-9 py-2 bg-gray-50 dark:bg-gray-700/50 w-full text-sm"
            />
          </div>
        </div>

        <div className="flex-1" />

        {/* Right Actions */}
        <div className="flex items-center gap-1">
          {/* Mobile search */}
          <button className="sm:hidden w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
            <HiOutlineSearch className="w-4.5 h-4.5 text-erp-text dark:text-erp-dark-text" />
          </button>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? (
              <HiOutlineSun className="w-5 h-5 text-amber-500" />
            ) : (
              <HiOutlineMoon className="w-5 h-5 text-erp-text" />
            )}
          </button>

          {/* Notifications */}
          <div ref={notifRef} className="relative">
            <button
              onClick={() => setNotifOpen((o) => !o)}
              className="w-9 h-9 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors relative"
            >
              <HiOutlineBell className="w-5 h-5 text-erp-text dark:text-erp-dark-text" />
              {unreadCount > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
              )}
            </button>
            <AnimatePresence>
              {notifOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-80 bg-white dark:bg-erp-dark-card border border-erp-border dark:border-erp-dark-border rounded-card shadow-dropdown z-50"
                >
                  <div className="flex items-center justify-between px-4 py-3 border-b border-erp-border dark:border-erp-dark-border">
                    <h3 className="font-semibold text-erp-heading dark:text-erp-dark-heading text-sm">
                      Notifications
                    </h3>
                    <span className="badge-danger badge">{unreadCount} new</span>
                  </div>
                  <div className="max-h-72 overflow-y-auto divide-y divide-erp-border dark:divide-erp-dark-border">
                    {RECENT_ACTIVITIES.slice(0, 5).map((activity) => (
                      <div
                        key={activity.id}
                        className="px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors cursor-pointer"
                      >
                        <p className="text-xs text-erp-heading dark:text-erp-dark-heading leading-relaxed">
                          {activity.message}
                        </p>
                        <p className="text-caption text-erp-muted dark:text-erp-dark-text mt-1">
                          {activity.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="px-4 py-3 border-t border-erp-border dark:border-erp-dark-border">
                    <button className="text-sm text-primary font-medium hover:underline w-full text-center">
                      View all notifications
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile */}
          <div ref={profileRef} className="relative ml-1">
            <button
              onClick={() => setProfileOpen((o) => !o)}
              className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Avatar name={user?.name || 'Admin'} size="sm" />
              <div className="hidden sm:block text-left">
                <p className="text-sm font-semibold text-erp-heading dark:text-erp-dark-heading leading-tight">
                  {user?.name}
                </p>
                <p className="text-caption text-erp-muted dark:text-erp-dark-text capitalize">
                  {user?.role}
                </p>
              </div>
              <HiOutlineChevronDown className="w-3.5 h-3.5 text-erp-muted hidden sm:block" />
            </button>
            <AnimatePresence>
              {profileOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -8, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-erp-dark-card border border-erp-border dark:border-erp-dark-border rounded-card shadow-dropdown z-50"
                >
                  <div className="px-4 py-3 border-b border-erp-border dark:border-erp-dark-border">
                    <p className="font-semibold text-sm text-erp-heading dark:text-erp-dark-heading">{user?.name}</p>
                    <p className="text-caption text-erp-muted dark:text-erp-dark-text">{user?.email}</p>
                  </div>
                  <div className="py-1">
                    <button
                      onClick={() => { navigate('/profile'); setProfileOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-erp-text dark:text-erp-dark-text hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <HiOutlineUser className="w-4 h-4" /> My Profile
                    </button>
                    <button
                      onClick={() => { navigate('/settings'); setProfileOpen(false); }}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-erp-text dark:text-erp-dark-text hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    >
                      <HiOutlineCog className="w-4 h-4" /> Settings
                    </button>
                    <div className="erp-divider my-1" />
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-2.5 px-4 py-2 text-sm text-danger hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <HiOutlineLogout className="w-4 h-4" /> Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}
