import { 
  HiOutlineHome, 
  HiOutlineUser, 
  HiOutlineClipboardCheck, 
  HiOutlineBookOpen,
  HiOutlineDocumentText,
  HiOutlinePencilAlt,
  HiOutlineClipboardList,
  HiOutlineCalendar,
  HiOutlineAcademicCap,
  HiOutlineDocumentReport,
  HiOutlineCurrencyRupee,
  HiOutlineSpeakerphone,
  HiOutlineStar,
  HiOutlineDownload,
  HiOutlineCog
} from 'react-icons/hi';

export const SIDEBAR_MENU = [
  {
    title: 'Main',
    items: [
      { id: 'dashboard', label: 'Dashboard', icon: HiOutlineHome, path: '/' },
      { id: 'profile', label: 'My Profile', icon: HiOutlineUser, path: '/profile' },
      { id: 'attendance', label: 'Attendance', icon: HiOutlineClipboardCheck, path: '/attendance' },
    ]
  },
  {
    title: 'Academics',
    items: [
      { id: 'subjects', label: 'My Subjects', icon: HiOutlineBookOpen, path: '/subjects' },
      { id: 'study-materials', label: 'Study Materials', icon: HiOutlineDocumentText, path: '/study-materials' },
      { id: 'homework', label: 'Homework', icon: HiOutlinePencilAlt, path: '/homework' },
      { id: 'assignments', label: 'Assignments', icon: HiOutlineClipboardList, path: '/assignments' },
    ]
  },
  {
    title: 'Performance',
    items: [
      { id: 'timetable', label: 'Timetable', icon: HiOutlineCalendar, path: '/timetable' },
      { id: 'examinations', label: 'Examinations', icon: HiOutlineAcademicCap, path: '/examinations' },
      { id: 'results', label: 'Results', icon: HiOutlineDocumentReport, path: '/results' },
    ]
  },
  {
    title: 'Administration',
    items: [
      { id: 'fees', label: 'Fees', icon: HiOutlineCurrencyRupee, path: '/fees' },
      { id: 'notice-board', label: 'Notice Board', icon: HiOutlineSpeakerphone, path: '/notice-board' },
      { id: 'events', label: 'Events', icon: HiOutlineStar, path: '/events' },
      { id: 'downloads', label: 'Downloads', icon: HiOutlineDownload, path: '/downloads' },
    ]
  },
  {
    title: 'Preferences',
    items: [
      { id: 'settings', label: 'Settings', icon: HiOutlineCog, path: '/settings' },
    ]
  }
];
