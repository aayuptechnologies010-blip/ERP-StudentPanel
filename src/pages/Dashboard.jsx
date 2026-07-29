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
}