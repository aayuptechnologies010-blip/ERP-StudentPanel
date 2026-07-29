import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import AuthLayout from '../layouts/AuthLayout';
import { Loader } from '../components/ui/index'; // Assume Loader is in ui/index if not, I'll fix it

// We'll create a simple inline Loader for Suspense if the UI one isn't perfectly mapped
const FallbackLoader = () => (
  <div className="flex items-center justify-center min-h-[400px]">
    <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
  </div>
);

// Lazy loading pages
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Profile = lazy(() => import('../pages/Profile'));
const Attendance = lazy(() => import('../pages/Attendance'));
const Subjects = lazy(() => import('../pages/Subjects'));
const StudyMaterials = lazy(() => import('../pages/StudyMaterials'));
const Homework = lazy(() => import('../pages/Homework'));
const Assignments = lazy(() => import('../pages/Assignments'));
const Timetable = lazy(() => import('../pages/Timetable'));
const Examinations = lazy(() => import('../pages/Examinations'));
const Results = lazy(() => import('../pages/Results'));
const Fees = lazy(() => import('../pages/Fees'));
const NoticeBoard = lazy(() => import('../pages/NoticeBoard'));
const Events = lazy(() => import('../pages/Events'));
const Downloads = lazy(() => import('../pages/Downloads'));
const Settings = lazy(() => import('../pages/Settings'));
const Login = lazy(() => import('../pages/Login'));

const withSuspense = (Component) => (
  <Suspense fallback={<FallbackLoader />}>
    <Component />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '', element: withSuspense(Dashboard) },
      { path: 'profile', element: withSuspense(Profile) },
      { path: 'attendance', element: withSuspense(Attendance) },
      { path: 'subjects', element: withSuspense(Subjects) },
      { path: 'study-materials', element: withSuspense(StudyMaterials) },
      { path: 'homework', element: withSuspense(Homework) },
      { path: 'assignments', element: withSuspense(Assignments) },
      { path: 'timetable', element: withSuspense(Timetable) },
      { path: 'examinations', element: withSuspense(Examinations) },
      { path: 'results', element: withSuspense(Results) },
      { path: 'fees', element: withSuspense(Fees) },
      { path: 'notice-board', element: withSuspense(NoticeBoard) },
      { path: 'events', element: withSuspense(Events) },
      { path: 'downloads', element: withSuspense(Downloads) },
      { path: 'settings', element: withSuspense(Settings) },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <Suspense fallback={<FallbackLoader />}><Login /></Suspense> },
    ],
  },
  {
    path: '/login',
    element: <AuthLayout />,
    children: [
      { path: '', element: <Suspense fallback={<FallbackLoader />}><Login /></Suspense> },
    ],
  }
]);

export default router;
