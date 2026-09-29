'use client';

import { useEffect, useState } from 'react';

type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
};

export default function AdminPage() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadAppointments = async () => {
    try {
      setError('');
      const response = await fetch('/api/appointments');
      if (!response.ok) throw new Error('Could not load appointments');
      const data = await response.json();
      setAppointments(data.appointments ?? []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not load appointments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAppointments();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/appointments?id=${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Could not delete appointment');
      setAppointments((current) => current.filter((item) => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not delete appointment');
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-semibold">Appointment Requests</h1>
          </div>
          <a href="/" className="rounded-full bg-cyan-600 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-700">
            Back to site
          </a>
        </div>

        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          {loading ? (
            <p className="text-slate-600 dark:text-slate-300">Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <p className="text-slate-600 dark:text-slate-300">No appointment requests yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300">
                    <th className="p-3 font-semibold">Name</th>
                    <th className="p-3 font-semibold">Phone</th>
                    <th className="p-3 font-semibold">Email</th>
                    <th className="p-3 font-semibold">Service</th>
                    <th className="p-3 font-semibold">Message</th>
                    <th className="p-3 font-semibold">Date</th>
                    <th className="p-3 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id} className="border-b border-slate-200 align-top dark:border-slate-800">
                      <td className="p-3">{appointment.name}</td>
                      <td className="p-3">{appointment.phone}</td>
                      <td className="p-3">{appointment.email}</td>
                      <td className="p-3">{appointment.service}</td>
                      <td className="p-3 max-w-xs whitespace-pre-wrap">{appointment.message || '—'}</td>
                      <td className="p-3">{new Date(appointment.createdAt).toLocaleString()}</td>
                      <td className="p-3">
                        <button
                          onClick={() => handleDelete(appointment.id)}
                          className="rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
