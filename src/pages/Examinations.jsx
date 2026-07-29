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
}