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
}