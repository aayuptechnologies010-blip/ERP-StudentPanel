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
}