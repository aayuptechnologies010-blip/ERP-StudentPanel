import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Avatar } from '../components/ui';

export default function Profile() {
  return (
    <>
      <Helmet><title>My Profile — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="My Profile"
        subtitle="Manage your personal and academic information."
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card p-6 flex flex-col items-center text-center h-fit">
          <Avatar size="xl" name="Student User" />
          <h2 className="text-xl font-bold mt-4">John Doe</h2>
          <p className="text-sm text-erp-muted mb-4">Class 10 - Section A</p>
          <span className="badge-success badge">Active Student</span>
          
          <div className="w-full mt-6 space-y-3">
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">Roll No</span>
              <span className="font-semibold">10A-42</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">Admission No</span>
              <span className="font-semibold">STU2021045</span>
            </div>
            <div className="flex justify-between text-sm py-2 border-b border-erp-border">
              <span className="text-erp-muted">DOB</span>
              <span className="font-semibold">15 May 2008</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h3 className="section-title mb-4">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Email</label>
                <p className="text-sm font-medium">student@eduerp.com</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Phone</label>
                <p className="text-sm font-medium">+91 9876543210</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Blood Group</label>
                <p className="text-sm font-medium">O+</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Address</label>
                <p className="text-sm font-medium">123, Edu Lane, City Center</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="section-title mb-4">Parent Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Father's Name</label>
                <p className="text-sm font-medium">Michael Doe</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Father's Phone</label>
                <p className="text-sm font-medium">+91 9123456780</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Mother's Name</label>
                <p className="text-sm font-medium">Sarah Doe</p>
              </div>
              <div>
                <label className="text-xs text-erp-muted uppercase font-bold">Mother's Phone</label>
                <p className="text-sm font-medium">+91 9988776655</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}