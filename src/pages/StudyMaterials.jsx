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
}