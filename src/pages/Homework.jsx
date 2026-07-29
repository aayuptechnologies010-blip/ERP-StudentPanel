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
}