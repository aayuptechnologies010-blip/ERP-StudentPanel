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
}