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
}