import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Button } from '../components/ui';

export default function Settings() {
  return (
    <>
      <Helmet><title>Settings — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Settings"
        subtitle="Manage your portal preferences."
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="section-title mb-4">Change Password</h3>
          <form className="space-y-4">
            <div>
              <label className="form-label">Current Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <div>
              <label className="form-label">New Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <div>
              <label className="form-label">Confirm New Password</label>
              <input type="password" placeholder="••••••••" className="form-input" />
            </div>
            <Button>Update Password</Button>
          </form>
        </div>
        <div className="card p-6">
          <h3 className="section-title mb-4">Notification Preferences</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">Email Notifications</p>
                <p className="text-xs text-erp-muted">Receive updates via email</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">SMS Alerts</p>
                <p className="text-xs text-erp-muted">Receive SMS for attendance and fees</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-erp-border">
              <div>
                <p className="font-semibold text-sm">Push Notifications</p>
                <p className="text-xs text-erp-muted">In-app notifications</p>
              </div>
              <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-primary" defaultChecked />
            </div>
            <Button variant="outline" className="mt-4">Save Preferences</Button>
          </div>
        </div>
      </div>
    </>
  );
}