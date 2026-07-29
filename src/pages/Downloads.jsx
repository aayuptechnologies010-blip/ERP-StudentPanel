import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Button } from '../components/ui';

export default function Downloads() {
  const docs = [
    { title: 'Academic Calendar 2023-24', size: '2.4 MB' },
    { title: 'Syllabus Term 2', size: '1.1 MB' },
    { title: 'Holiday List', size: '0.5 MB' },
    { title: 'Library Rules', size: '0.8 MB' },
  ];
  return (
    <>
      <Helmet><title>Downloads — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Downloads Center"
        subtitle="Download important documents and forms."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {docs.map((d, i) => (
          <div key={i} className="card p-6 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-erp-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">{d.title}</h4>
            <p className="text-xs text-erp-muted mb-4">{d.size}</p>
            <Button variant="outline" size="sm" className="w-full">Download</Button>
          </div>
        ))}
      </div>
    </>
  );
}