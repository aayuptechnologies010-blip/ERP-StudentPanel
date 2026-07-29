import React from 'react';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../components/common/PageHeader';
import { APP_NAME } from '../constants';
import { Badge, Button } from '../components/ui';

export default function Fees() {
  const data = [
    { id: 'INV-001', type: 'Tuition Fee (Term 1)', amount: '₹12,500', due: '2023-04-10', status: 'Paid' },
    { id: 'INV-002', type: 'Transport Fee', amount: '₹3,000', due: '2023-04-10', status: 'Paid' },
    { id: 'INV-003', type: 'Tuition Fee (Term 2)', amount: '₹12,500', due: '2023-11-10', status: 'Pending' },
  ];
  return (
    <>
      <Helmet><title>Fees — Student Portal | {APP_NAME}</title></Helmet>
      <PageHeader
        title="Fee Details"
        subtitle="Manage your fee payments and view receipts."
      />
      <div className="card p-6 mb-6 flex justify-between items-center bg-danger/5 border-danger/20">
        <div>
          <p className="text-danger font-medium">Pending Dues</p>
          <p className="text-h2 font-bold text-danger">₹12,500</p>
        </div>
        <Button variant="danger">Pay Now</Button>
      </div>
      <div className="card p-6">
        <h3 className="section-title mb-4">Fee History</h3>
        <div className="overflow-x-auto">
          <table className="erp-table">
            <thead>
              <tr>
                <th>Invoice No.</th>
                <th>Fee Type</th>
                <th>Amount</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, i) => (
                <tr key={i}>
                  <td className="font-mono text-xs">{row.id}</td>
                  <td className="font-medium">{row.type}</td>
                  <td className="font-bold">{row.amount}</td>
                  <td>{row.due}</td>
                  <td>
                    {row.status === 'Paid' ? <Badge variant="success">Paid</Badge> : <Badge variant="danger">Pending</Badge>}
                  </td>
                  <td>
                    {row.status === 'Paid' ? <Button variant="outline" size="sm">Receipt</Button> : <Button size="sm">Pay</Button>}
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