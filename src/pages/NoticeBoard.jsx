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
}