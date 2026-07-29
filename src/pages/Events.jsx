import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function Events() {
  const events = [
    { date: '25 Oct 2023', title: 'Annual Sports Day', venue: 'Main Ground' },
    { date: '14 Nov 2023', title: 'Childrens Day Celebration', venue: 'Auditorium' },
    { date: '22 Dec 2023', title: 'Winter Carnival', venue: 'School Campus' },
  ];
  return (
    <>
      <Helmet><title>Events — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="School Events"
        subtitle="Upcoming events and activities."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((e, i) => (
          <div key={i} className="card p-6 border-t-4 border-t-secondary">
            <h3 className="text-lg font-bold text-erp-heading mb-1">{e.title}</h3>
            <p className="text-sm font-semibold text-secondary mb-3">{e.date}</p>
            <p className="text-sm text-erp-muted">Venue: {e.venue}</p>
          </div>
        ))}
      </div>
    </>
  );
}