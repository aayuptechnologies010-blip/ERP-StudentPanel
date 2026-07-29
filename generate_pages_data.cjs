const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');

const pages = {
  Dashboard: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { HiOutlineAcademicCap, HiOutlineCalendar, HiOutlineClipboardCheck, HiOutlineCurrencyRupee } from 'react-icons/hi';

export default function Dashboard() {
  return (
    <>
      <Helmet><title>Dashboard — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back, Student! Here's what's happening today."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="stat-card flex items-center gap-4 border-l-4 border-primary">
          <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center">
            <HiOutlineClipboardCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-erp-muted">Overall Attendance</p>
            <p className="text-h3 font-bold text-erp-heading">92.5%</p>
          </div>
        </div>
        <div className="stat-card flex items-center gap-4 border-l-4 border-accent">
          <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center">
            <HiOutlineAcademicCap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-erp-muted">Upcoming Exams</p>
            <p className="text-h3 font-bold text-erp-heading">3</p>
          </div>
        </div>
        <div className="stat-card flex items-center gap-4 border-l-4 border-danger">
          <div className="w-12 h-12 rounded-full bg-danger/10 text-danger flex items-center justify-center">
            <HiOutlineCurrencyRupee className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-erp-muted">Pending Fees</p>
            <p className="text-h3 font-bold text-erp-heading">₹12,500</p>
          </div>
        </div>
        <div className="stat-card flex items-center gap-4 border-l-4 border-secondary">
          <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center">
            <HiOutlineCalendar className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-medium text-erp-muted">Events This Month</p>
            <p className="text-h3 font-bold text-erp-heading">5</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card p-6">
          <h3 className="section-title mb-4">Today's Timetable</h3>
          <table className="erp-table">
            <thead>
              <tr>
                <th>Time</th>
                <th>Subject</th>
                <th>Teacher</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>08:00 AM</td>
                <td>Mathematics</td>
                <td>Mr. Sharma</td>
                <td>Room 101</td>
              </tr>
              <tr>
                <td>09:00 AM</td>
                <td>Physics</td>
                <td>Ms. Verma</td>
                <td>Lab 2</td>
              </tr>
              <tr>
                <td>10:00 AM</td>
                <td>Chemistry</td>
                <td>Dr. Singh</td>
                <td>Lab 1</td>
              </tr>
              <tr>
                <td>11:00 AM</td>
                <td>Break</td>
                <td>-</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="card p-6">
          <h3 className="section-title mb-4">Recent Notices</h3>
          <div className="space-y-4">
            <div className="p-3 border rounded-xl border-erp-border">
              <span className="text-xs text-primary font-bold">12 Oct 2023</span>
              <p className="text-sm font-medium mt-1">Science Exhibition Registrations Open</p>
            </div>
            <div className="p-3 border rounded-xl border-erp-border">
              <span className="text-xs text-primary font-bold">10 Oct 2023</span>
              <p className="text-sm font-medium mt-1">Diwali Holidays Announcement</p>
            </div>
            <div className="p-3 border rounded-xl border-erp-border">
              <span className="text-xs text-primary font-bold">05 Oct 2023</span>
              <p className="text-sm font-medium mt-1">Mid-term Results Declared</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`,
  Profile: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Avatar } from '../components/ui';

export default function Profile() {
  return (
    <>
      <Helmet><title>My Profile — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="My Profile"
        subtitle="Manage your personal and academic information."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 flex flex-col items-center text-center h-fit">
          <Avatar size="xl" name="Student User" />
          <h2 className="text-xl font-bold mt-4">John Doe</h2>
          <p className="text-sm text-erp-muted mb-4">Class 10 - Section A</p>
          <span className="badge-success badge">Active Student</span>
          
          <div className="w-full mt-6 space-y-3">
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">Roll No</span>
              <span className="font-semibold">10A-42</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">Admission No</span>
              <span className="font-semibold">STU2021045</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">DOB</span>
              <span className="font-semibold">15 May 2008</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h3 className="section-title mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Email</label>
                <p className="text-sm font-medium">student@eduerp.com</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Phone</label>
                <p className="text-sm font-medium">+91 9876543210</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Blood Group</label>
                <p className="text-sm font-medium">O+</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Address</label>
                <p className="text-sm font-medium">123, Edu Lane, City Center</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="section-title mb-4">Parent Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Father's Name</label>
                <p className="text-sm font-medium">Michael Doe</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Father's Phone</label>
                <p className="text-sm font-medium">+91 9123456780</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Mother's Name</label>
                <p className="text-sm font-medium">Sarah Doe</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Mother's Phone</label>
                <p className="text-sm font-medium">+91 9988776655</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}`,
  Attendance: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge } from '../components/ui';

export default function Attendance() {
  const data = [
    { date: '2023-10-15', status: 'Present', remarks: '-' },
    { date: '2023-10-14', status: 'Present', remarks: '-' },
    { date: '2023-10-13', status: 'Absent', remarks: 'Sick Leave' },
    { date: '2023-10-12', status: 'Present', remarks: '-' },
    { date: '2023-10-11', status: 'Late', remarks: 'Transport Issue' },
  ];

  return (
    <>
      <Helmet><title>Attendance — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Attendance Record"
        subtitle="View your daily attendance and overall percentage."
      />
      <div className="card p-6">
        <h3 className="section-title mb-4">Recent Attendance</h3>
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Status</th>
                <th>Remarks</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td>{row.date}</td>
                  <td>
                    {row.status === 'Present' && <Badge variant="success">Present</Badge>}
                    {row.status === 'Absent' && <Badge variant="danger">Absent</Badge>}
                    {row.status === 'Late' && <Badge variant="warning">Late</Badge>}
                  </td>
                  <td>{row.remarks}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Subjects: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function Subjects() {
  const data = [
    { code: 'MAT101', name: 'Mathematics', teacher: 'Mr. A. Sharma' },
    { code: 'PHY101', name: 'Physics', teacher: 'Ms. R. Verma' },
    { code: 'CHE101', name: 'Chemistry', teacher: 'Dr. V. Singh' },
    { code: 'ENG101', name: 'English', teacher: 'Mrs. K. Patel' },
    { code: 'CS101', name: 'Computer Science', teacher: 'Mr. S. Kumar' },
  ];
  return (
    <>
      <Helmet><title>My Subjects — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="My Subjects"
        subtitle="List of enrolled subjects and corresponding teachers."
      />
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Subject Code</th>
                <th>Subject Name</th>
                <th>Teacher Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-mono font-medium">{row.code}</td>
                  <td className="font-medium text-erp-heading">{row.name}</td>
                  <td>{row.teacher}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  StudyMaterials: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Button } from '../components/ui';

export default function StudyMaterials() {
  const data = [
    { title: 'Trigonometry Formulas', subject: 'Mathematics', date: '2023-10-10', type: 'PDF' },
    { title: 'Laws of Motion', subject: 'Physics', date: '2023-10-12', type: 'DOCX' },
    { title: 'Periodic Table Notes', subject: 'Chemistry', date: '2023-10-14', type: 'PDF' },
  ];
  return (
    <>
      <Helmet><title>Study Materials — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Study Materials"
        subtitle="Download study materials uploaded by your teachers."
      />
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Date Uploaded</th>
                <th>Type</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-medium">{row.title}</td>
                  <td>{row.subject}</td>
                  <td>{row.date}</td>
                  <td><span className="badge badge-gray">{row.type}</span></td>
                  <td><Button variant="outline" size="sm">Download</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Homework: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge } from '../components/ui';

export default function Homework() {
  const data = [
    { title: 'Algebra Excercise 4.1', subject: 'Mathematics', due: '2023-10-16', status: 'Pending' },
    { title: 'Read Chapter 3', subject: 'English', due: '2023-10-15', status: 'Submitted' },
    { title: 'Chemical Equations', subject: 'Chemistry', due: '2023-10-14', status: 'Evaluated' },
  ];
  return (
    <>
      <Helmet><title>Homework — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Homework"
        subtitle="Track your daily homework assignments."
      />
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Subject</th>
                <th>Due Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-medium">{row.title}</td>
                  <td>{row.subject}</td>
                  <td>{row.due}</td>
                  <td>
                    {row.status === 'Pending' && <Badge variant="warning">Pending</Badge>}
                    {row.status === 'Submitted' && <Badge variant="primary">Submitted</Badge>}
                    {row.status === 'Evaluated' && <Badge variant="success">Evaluated</Badge>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Assignments: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge, Button } from '../components/ui';

export default function Assignments() {
  const data = [
    { title: 'Physics Practical Record', due: '2023-10-20', status: 'Pending', marks: '-' },
    { title: 'History Essay', due: '2023-10-05', status: 'Graded', marks: '18/20' },
  ];
  return (
    <>
      <Helmet><title>Assignments — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Assignments"
        subtitle="Submit and track major assignments and projects."
      />
      <div className="card p-6">
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Assignment Title</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Marks Obtained</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-medium">{row.title}</td>
                  <td>{row.due}</td>
                  <td>
                    {row.status === 'Pending' && <Badge variant="warning">Pending</Badge>}
                    {row.status === 'Graded' && <Badge variant="success">Graded</Badge>}
                  </td>
                  <td className="font-bold">{row.marks}</td>
                  <td>
                    {row.status === 'Pending' ? <Button size="sm">Submit</Button> : <Button variant="outline" size="sm">View</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Timetable: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function Timetable() {
  return (
    <>
      <Helmet><title>Timetable — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Class Timetable"
        subtitle="View your weekly class schedule."
      />
      <div className="card p-6 overflow-x-auto">
        <table className="erp-table min-w-[800px]">
          <thead>
            <tr>
              <th>Time</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-bold">08:00 AM</td>
              <td>Math</td>
              <td>Physics</td>
              <td>Chemistry</td>
              <td>English</td>
              <td>PE</td>
            </tr>
            <tr>
              <td className="font-bold">09:00 AM</td>
              <td>Physics</td>
              <td>Math</td>
              <td>Computer</td>
              <td>Physics</td>
              <td>Math</td>
            </tr>
            <tr>
              <td className="font-bold">10:00 AM</td>
              <td>Chemistry</td>
              <td>Computer</td>
              <td>English</td>
              <td>Chemistry</td>
              <td>Library</td>
            </tr>
            <tr>
              <td className="font-bold text-erp-muted">11:00 AM</td>
              <td colSpan="5" className="text-center font-semibold bg-gray-50 text-gray-400">RECESS</td>
            </tr>
            <tr>
              <td className="font-bold">11:30 AM</td>
              <td>English</td>
              <td>Chemistry</td>
              <td>Math</td>
              <td>Computer</td>
              <td>Physics</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}`,
  Examinations: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge } from '../components/ui';

export default function Examinations() {
  const data = [
    { subject: 'Mathematics', date: '2023-11-01', time: '10:00 AM - 01:00 PM', room: 'Hall A' },
    { subject: 'Physics', date: '2023-11-03', time: '10:00 AM - 01:00 PM', room: 'Hall A' },
    { subject: 'Chemistry', date: '2023-11-05', time: '10:00 AM - 01:00 PM', room: 'Hall B' },
  ];
  return (
    <>
      <Helmet><title>Examinations — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Examinations Schedule"
        subtitle="View upcoming examination dates and venues."
      />
      <div className="card p-6">
        <h3 className="section-title mb-4">Term 1 Final Exams</h3>
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-medium text-erp-heading">{row.subject}</td>
                  <td>{row.date}</td>
                  <td>{row.time}</td>
                  <td><Badge variant="primary">{row.room}</Badge></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Results: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function Results() {
  const data = [
    { subject: 'Mathematics', total: 100, obtained: 92, grade: 'A+' },
    { subject: 'Physics', total: 100, obtained: 88, grade: 'A' },
    { subject: 'Chemistry', total: 100, obtained: 85, grade: 'A' },
    { subject: 'English', total: 100, obtained: 78, grade: 'B+' },
    { subject: 'Computer Science', total: 100, obtained: 95, grade: 'A+' },
  ];
  return (
    <>
      <Helmet><title>Results — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Examination Results"
        subtitle="View your mark sheets and academic progress."
      />
      <div className="card p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="section-title">Mid-Term Examination 2023</h3>
          <div className="text-right">
            <p className="text-sm text-erp-muted">Overall Percentage</p>
            <p className="text-2xl font-bold text-success-600">87.6%</p>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Total Marks</th>
                <th>Marks Obtained</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-medium">{row.subject}</td>
                  <td>{row.total}</td>
                  <td className="font-bold">{row.obtained}</td>
                  <td className="font-bold text-primary">{row.grade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  Fees: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge, Button } from '../components/ui';

export default function Fees() {
  const data = [
    { id: 'INV-001', type: 'Tuition Fee (Term 1)', amount: '₹12,500', due: '2023-04-10', status: 'Paid' },
    { id: 'INV-002', type: 'Transport Fee', amount: '₹3,000', due: '2023-04-10', status: 'Paid' },
    { id: 'INV-003', type: 'Tuition Fee (Term 2)', amount: '₹12,500', due: '2023-11-10', status: 'Pending' },
  ];
  return (
    <>
      <Helmet><title>Fees — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Fee Details"
        subtitle="Manage your fee payments and view receipts."
      />
      <div className="card p-6 mb-6 flex justify-between items-center bg-danger/5 border-danger/20">
        <div>
          <p className="text-danger font-medium">Pending Dues</p>
          <p className="text-h2 font-bold text-danger">₹12,500</p>
        </div>
        <Button variant="danger">Pay Now</Button>
      </div>
      <div className="card p-6">
        <h3 className="section-title mb-4">Fee History</h3>
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Invoice No.</th>
                <th>Fee Type</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-mono text-xs">{row.id}</td>
                  <td className="font-medium">{row.type}</td>
                  <td className="font-bold">{row.amount}</td>
                  <td>{row.due}</td>
                  <td>
                    {row.status === 'Paid' ? <Badge variant="success">Paid</Badge> : <Badge variant="danger">Pending</Badge>}
                  </td>
                  <td>
                    {row.status === 'Paid' ? <Button variant="outline" size="sm">Receipt</Button> : <Button size="sm">Pay</Button>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}`,
  NoticeBoard: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function NoticeBoard() {
  const notices = [
    { date: '12 Oct 2023', title: 'Science Exhibition Registrations Open', desc: 'Students interested in participating in the annual science exhibition should register with their class teachers by 20th Oct.' },
    { date: '10 Oct 2023', title: 'Diwali Holidays Announcement', desc: 'The school will remain closed from 22nd Oct to 26th Oct on account of Diwali.' },
    { date: '05 Oct 2023', title: 'Mid-term Results Declared', desc: 'The mid-term results have been declared. Please check the results section in your portal.' },
  ];
  return (
    <>
      <Helmet><title>Notice Board — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Notice Board"
        subtitle="Important announcements and circulars."
      />
      <div className="space-y-4">
        {notices.map((n, i) => (
          <div key={i} className="card p-6">
            <span className="text-sm font-bold text-primary mb-2 block">{n.date}</span>
            <h3 className="text-lg font-bold text-erp-heading mb-2">{n.title}</h3>
            <p className="text-erp-text">{n.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}`,
  Events: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function Events() {
  const events = [
    { date: '25 Oct 2023', title: 'Annual Sports Day', venue: 'Main Ground' },
    { date: '14 Nov 2023', title: 'Childrens Day Celebration', venue: 'Auditorium' },
    { date: '22 Dec 2023', title: 'Winter Carnival', venue: 'School Campus' },
  ];
  return (
    <>
      <Helmet><title>Events — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="School Events"
        subtitle="Upcoming events and activities."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <div key={i} className="card p-6 border-t-4 border-t-secondary">
            <h3 className="text-lg font-bold text-erp-heading mb-1">{e.title}</h3>
            <p className="text-sm font-semibold text-secondary mb-3">{e.date}</p>
            <p className="text-sm text-erp-muted">Venue: {e.venue}</p>
          </div>
        ))}
      </div>
    </>
  );
}`,
  Downloads: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Button } from '../components/ui';

export default function Downloads() {
  const docs = [
    { title: 'Academic Calendar 2023-24', size: '2.4 MB' },
    { title: 'Syllabus Term 2', size: '1.1 MB' },
    { title: 'Holiday List', size: '0.5 MB' },
    { title: 'Library Rules', size: '0.8 MB' },
  ];
  return (
    <>
      <Helmet><title>Downloads — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Downloads Center"
        subtitle="Download important documents and forms."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {docs.map((d, i) => (
          <div key={i} className="card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-erp-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">{d.title}</h4>
            <p className="text-xs text-erp-muted mb-4">{d.size}</p>
            <Button variant="outline" size="sm" className="w-full">Download</Button>
          </div>
        ))}
      </div>
    </>
  );
}`,
  Settings: `
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Button } from '../components/ui';

export default function Settings() {
  return (
    <>
      <Helmet><title>Settings — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Settings"
        subtitle="Manage your portal preferences."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="section-title mb-4">Change Password</h3>
          <form className="space-y-4">
            <div>
              <label className="form-label">Current Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <div>
              <label className="form-label">New Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <div>
              <label className="form-label">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <Button>Update Password</Button>
          </form>
        </div>
        <div className="card p-6">
          <h3 className="section-title mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">Email Notifications</p>
                <p className="text-xs text-erp-muted">Receive updates via email</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">SMS Alerts</p>
                <p className="text-xs text-erp-muted">Receive SMS for attendance and fees</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">Push Notifications</p>
                <p className="text-xs text-erp-muted">In-app notifications</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <Button variant="outline" className="mt-4">Save Preferences</Button>
          </div>
        </div>
      </div>
    </>
  );
}`
};

Object.keys(pages).forEach(page => {
  fs.writeFileSync(path.join(pagesDir, page + '.jsx'), pages[page].trim());
});

console.log('Successfully populated all 15 pages with realistic mock data templates.');
