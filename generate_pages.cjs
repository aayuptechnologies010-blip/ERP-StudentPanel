const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
if (!fs.existsSync(pagesDir)) {
  fs.mkdirSync(pagesDir, { recursive: true });
}

const pages = [
  'Dashboard',
  'Profile',
  'Attendance',
  'Subjects',
  'StudyMaterials',
  'Homework',
  'Assignments',
  'Timetable',
  'Examinations',
  'Results',
  'Fees',
  'NoticeBoard',
  'Events',
  'Downloads',
  'Settings'
];

pages.forEach(page => {
  const content = `import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';

export default function ${page}() {
  return (
    <>
      <Helmet><title>${page} — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="${page}"
        subtitle="View your ${page.toLowerCase()} details and records."
      />
      <div className="card p-6">
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-erp-heading dark:text-erp-dark-heading mb-2">No data found</h3>
          <p className="text-erp-muted dark:text-erp-dark-text max-w-sm">
            We couldn't find any data for ${page} at this moment. Please check back later or contact your school administration.
          </p>
        </div>
      </div>
    </>
  );
}
`;
  fs.writeFileSync(path.join(pagesDir, `${page}.jsx`), content);
});

console.log('Successfully generated all mock pages for Student Panel.');
