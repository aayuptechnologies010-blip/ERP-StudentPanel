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
}